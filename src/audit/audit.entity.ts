import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AuditType {
  CUSTOMER_STATUS = 'customerStatus',
  TRACKING = 'tracking',
}

@Entity('AuditoriaB2B')
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Tipo',
  })
  type: AuditType;

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
    nullable: true,
  })
  output_at: Date;

  @CreateDateColumn({
    name: 'DataHora',
    nullable: false,
  })
  created_at: Date;
}
