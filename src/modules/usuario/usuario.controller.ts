import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() criarUsuarioDto: CriarUsuarioDto) {
    return this.usuarioService.criar(criarUsuarioDto);
  }

  @Get()
  async listarTodos() {
    return this.usuarioService.listarTodos();
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.usuarioService.remover(id);
  }
}
