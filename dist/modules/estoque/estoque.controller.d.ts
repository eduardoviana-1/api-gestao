import { EstoqueService } from './estoque.service';
import { RealizarRetiradaDto } from './dto/realizar-retirada.dto';
export declare class EstoqueController {
    private readonly estoqueService;
    constructor(estoqueService: EstoqueService);
    realizarRetirada(realizarRetiradaDto: RealizarRetiradaDto): Promise<import("./entities/retirada.entity").Retirada>;
    listarRetiradas(): Promise<import("./entities/retirada.entity").Retirada[]>;
}
