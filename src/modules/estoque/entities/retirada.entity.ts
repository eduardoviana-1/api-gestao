import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Equipamento } from '../../equipamentos/entities/equipamento.entity';

@Entity('retiradas')
export class Retirada {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'usuario_id' })
  usuarioId!: string;

  @Column({ name: 'equipamento_id' })
  equipamentoId!: string;

  @Column({ type: 'int' })
  quantidade!: number;

  @CreateDateColumn({ name: 'realizado_em' })
  realizadoEm!: Date;

  // Relacionamentos para facilitar consultas futuras
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @ManyToOne(() => Equipamento)
  @JoinColumn({ name: 'equipamento_id' })
  equipamento!: Equipamento;
}
