import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { RealizarRetiradaDto } from './dto/realizar-retirada.dto';
import { Retirada } from './entities/retirada.entity';
import { Equipamento } from '../equipamentos/entities/equipamento.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class EstoqueService {
  constructor(private readonly dataSource: DataSource) {}

  async realizarRetirada(retiradaDto: RealizarRetiradaDto): Promise<Retirada> {
    const { usuarioId, equipamentoId, quantidade } = retiradaDto;

    // Criamos o queryRunner para ter controle total sobre a transação
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 1. Verificar se o usuário existe
      const usuario = await queryRunner.manager.findOneBy(Usuario, {
        id: usuarioId,
      });
      if (!usuario) {
        throw new NotFoundException('Usuário não encontrado');
      }

      // 2. Buscar o equipamento com Lock de Escrita (Pessimistic Write Lock)
      // Isso impede que duas retiradas simultâneas alterem o mesmo saldo ao mesmo tempo
      const equipamento = await queryRunner.manager.findOne(Equipamento, {
        where: { id: equipamentoId },
        lock: { mode: 'pessimistic_write' },
      });

      if (!equipamento) {
        throw new NotFoundException('Equipamento não encontrado');
      }

      // 3. Validar saldo em estoque
      if (equipamento.quantidadeEstoque < quantidade) {
        throw new ConflictException(
          'Quantidade em estoque insuficiente para realizar a retirada',
        );
      }

      // 4. Decrementar o estoque do equipamento
      equipamento.quantidadeEstoque -= quantidade;
      await queryRunner.manager.save(equipamento);

      // 5. Registrar a retirada
      const novaRetirada = queryRunner.manager.create(Retirada, {
        usuarioId,
        equipamentoId,
        quantidade,
      });

      const retiradaSalva = await queryRunner.manager.save(novaRetirada);

      // 6. Confirmar a transação
      await queryRunner.commitTransaction();

      return retiradaSalva;
    } catch (err) {
      // Em caso de erro, desfazemos tudo o que foi feito na transação
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // Liberamos o queryRunner de volta para o sistema
      await queryRunner.release();
    }
  }

  async listarRetiradas(): Promise<Retirada[]> {
    return await this.dataSource.manager.find(Retirada, {
      relations: ['usuario', 'equipamento'],
      order: { realizadoEm: 'DESC' },
    });
  }
}
