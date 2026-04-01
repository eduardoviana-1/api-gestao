import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CriarUsuarioDto {
  @ApiProperty({ example: 'João Silva' })
  @IsNotEmpty({ message: 'O nome completo é obrigatório' })
  @IsString()
  nomeCompleto!: string;

  @ApiProperty({ example: '12345678901' })
  @IsNotEmpty({ message: 'O CPF é obrigatório' })
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres' })
  cpf!: string;

  @ApiProperty({ example: 'joao@email.com' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @ApiProperty({ example: 'senha123' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  senha!: string;
}
