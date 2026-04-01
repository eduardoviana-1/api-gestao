import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID, Min } from 'class-validator';

export class RealizarRetiradaDto {
  @ApiProperty({ example: 'uuid-do-usuario' })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @IsUUID('4', { message: 'ID de usuário inválido' })
  usuarioId!: string;

  @ApiProperty({ example: 'uuid-do-equipamento' })
  @IsNotEmpty({ message: 'O ID do equipamento é obrigatório' })
  @IsUUID('4', { message: 'ID de equipamento inválido' })
  equipamentoId!: string;

  @ApiProperty({ example: 2 })
  @IsNotEmpty({ message: 'A quantidade de retirada é obrigatória' })
  @IsInt({ message: 'A quantidade deve ser um número inteiro' })
  @Min(1, { message: 'A quantidade mínima de retirada deve ser 1' })
  quantidade!: number;
}
