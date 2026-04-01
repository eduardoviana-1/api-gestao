import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { RealizarRetiradaDto } from './dto/realizar-retirada.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post('retirada')
  async realizarRetirada(@Body() realizarRetiradaDto: RealizarRetiradaDto) {
    return this.estoqueService.realizarRetirada(realizarRetiradaDto);
  }

  @Get('retirada')
  async listarRetiradas() {
    return this.estoqueService.listarRetiradas();
  }
}
