import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipamento } from './entities/equipamento.entity';
import { EntradaEquipamentoDto } from './dto/entrada-equipamento.dto';

@Injectable()
export class EquipamentosService {
  constructor(
    @InjectRepository(Equipamento)
    private readonly equipamentoRepository: Repository<Equipamento>,
  ) {}

  async entrada(entradaDto: EntradaEquipamentoDto): Promise<Equipamento> {
    const { nome, quantidade } = entradaDto;

    // Busca se o equipamento já existe pelo nome
    let equipamento = await this.equipamentoRepository.findOneBy({ nome });

    if (equipamento) {
      // Se existe, incrementa a quantidade atual
      equipamento.quantidadeEstoque += quantidade;
    } else {
      // Se não existe, cria um novo
      equipamento = this.equipamentoRepository.create({
        nome,
        quantidadeEstoque: quantidade,
      });
    }

    return await this.equipamentoRepository.save(equipamento);
  }

  async listarTodos(): Promise<Equipamento[]> {
    return await this.equipamentoRepository.find({
      order: { nome: 'ASC' },
    });
  }

  async buscarPorId(id: string): Promise<Equipamento | null> {
    return await this.equipamentoRepository.findOneBy({ id });
  }
}
