import { Usuario } from '../../usuario/entities/usuario.entity';
import { Equipamento } from '../../equipamentos/entities/equipamento.entity';
export declare class Retirada {
    id: string;
    usuarioId: string;
    equipamentoId: string;
    quantidade: number;
    realizadoEm: Date;
    usuario: Usuario;
    equipamento: Equipamento;
}
