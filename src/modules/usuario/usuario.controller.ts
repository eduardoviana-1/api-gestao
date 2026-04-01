import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() criarUsuarioDto: CriarUsuarioDto) {
    return this.usuarioService.criar(criarUsuarioDto);
  }
}
