import { Repository } from 'typeorm';
import { Equipamento } from './entities/equipamento.entity';
import { EntradaEquipamentoDto } from './dto/entrada-equipamento.dto';
export declare class EquipamentosService {
    private readonly equipamentoRepository;
    constructor(equipamentoRepository: Repository<Equipamento>);
    entrada(entradaDto: EntradaEquipamentoDto): Promise<Equipamento>;
    listarTodos(): Promise<Equipamento[]>;
    buscarPorId(id: string): Promise<Equipamento | null>;
}
