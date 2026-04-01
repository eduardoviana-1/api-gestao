import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    criar(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario>;
    listarTodos(): Promise<Usuario[]>;
    remover(id: string): Promise<void>;
}
