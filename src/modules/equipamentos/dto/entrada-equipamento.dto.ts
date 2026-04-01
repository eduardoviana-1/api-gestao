import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class EntradaEquipamentoDto {
  @ApiProperty({ example: 'Caminhão Coletor' })
  @IsNotEmpty({ message: 'O nome do equipamento é obrigatório' })
  @IsString()
  nome!: string;

  @ApiProperty({ example: 5 })
  @IsNotEmpty({ message: 'A quantidade de entrada é obrigatória' })
  @IsInt({ message: 'A quantidade deve ser um número inteiro' })
  @Min(1, { message: 'A quantidade mínima de entrada deve ser 1' })
  quantidade!: number;
}
