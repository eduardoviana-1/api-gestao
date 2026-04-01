import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    criar(criarUsuarioDto: CriarUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    listarTodos(): Promise<import("./entities/usuario.entity").Usuario[]>;
}
