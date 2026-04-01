import { DataSource } from 'typeorm';
import { RealizarRetiradaDto } from './dto/realizar-retirada.dto';
import { Retirada } from './entities/retirada.entity';
export declare class EstoqueService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    realizarRetirada(retiradaDto: RealizarRetiradaDto): Promise<Retirada>;
    listarRetiradas(): Promise<Retirada[]>;
}
