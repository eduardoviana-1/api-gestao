import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipamentosService } from './equipamentos.service';
import { EntradaEquipamentoDto } from './dto/entrada-equipamento.dto';

@Controller('equipamentos')
export class EquipamentosController {
  constructor(private readonly equipamentosService: EquipamentosService) {}

  @Post()
  async realizarEntrada(@Body() entradaDto: EntradaEquipamentoDto) {
    return this.equipamentosService.entrada(entradaDto);
  }

  @Get()
  async listarTodos() {
    return this.equipamentosService.listarTodos();
  }
}
