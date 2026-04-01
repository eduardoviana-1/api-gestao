import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './entities/usuario.entity';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async criar(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    const { email, cpf, senha } = criarUsuarioDto;

    // Verifica se o e-mail já existe
    const usuarioComEmail = await this.usuarioRepository.findOneBy({ email });
    if (usuarioComEmail) {
      throw new ConflictException('O endereço de e-mail já está cadastrado');
    }

    // Verifica se o CPF já existe
    const usuarioComCpf = await this.usuarioRepository.findOneBy({ cpf });
    if (usuarioComCpf) {
      throw new ConflictException('O CPF informado já está cadastrado');
    }

    // Gerar hash da senha
    const salt = await bcrypt.genSalt(10);
    const senhaHashed = await bcrypt.hash(senha, salt);

    // Criar o usuário
    const novoUsuario = this.usuarioRepository.create({
      ...criarUsuarioDto,
      senha: senhaHashed,
    });

    return await this.usuarioRepository.save(novoUsuario);
  }
}
