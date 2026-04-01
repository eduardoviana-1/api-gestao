import { IsInt, IsNotEmpty, IsUUID, Min } from 'class-validator';

export class RealizarRetiradaDto {
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @IsUUID('4', { message: 'ID de usuário inválido' })
  usuarioId!: string;

  @IsNotEmpty({ message: 'O ID do equipamento é obrigatório' })
  @IsUUID('4', { message: 'ID de equipamento inválido' })
  equipamentoId!: string;

  @IsNotEmpty({ message: 'A quantidade de retirada é obrigatória' })
  @IsInt({ message: 'A quantidade deve ser um número inteiro' })
  @Min(1, { message: 'A quantidade mínima de retirada deve ser 1' })
  quantidade!: number;
}
