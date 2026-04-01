import { EquipamentosService } from './equipamentos.service';
import { EntradaEquipamentoDto } from './dto/entrada-equipamento.dto';
export declare class EquipamentosController {
    private readonly equipamentosService;
    constructor(equipamentosService: EquipamentosService);
    realizarEntrada(entradaDto: EntradaEquipamentoDto): Promise<import("./entities/equipamento.entity").Equipamento>;
    listarTodos(): Promise<import("./entities/equipamento.entity").Equipamento[]>;
}
