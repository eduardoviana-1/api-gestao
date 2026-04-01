import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'nome_completo' })
  nomeCompleto!: string;

  @Column({ unique: true })
  cpf!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false }) // O 'select: false' impede que a senha seja retornada em consultas padrão
  senha!: string;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm!: Date;

  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizadoEm!: Date;
}
