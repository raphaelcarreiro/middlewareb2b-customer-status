import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AuditoriaB2B')
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Tipo',
  })
  type: string;

  @Column({
    name: 'Distribuidor',
  })
  distributor_id: number;

  @Column({
    name: 'Entrada',
  })
  input: string;

  @Column({
    name: 'Retorno',
  })
  output: string;

  @Column({
    name: 'DataHoraRetorno',
  })
  output_at: Date;

  @Column({
    type: 'timestamp',
    name: 'DataHoraRetorno',
  })
  created_at: Date;
}
