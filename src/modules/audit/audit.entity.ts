import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    nullable: true,
  })
  output: string;

  @Column({
    name: 'DataHoraRetorno',
    nullable: true,
  })
  output_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'DataHora',
  })
  created_at: Date;

  @BeforeInsert()
  beforeInsertActions() {
    if (!this.type) {
      this.type = AuditType.CUSTOMER_STATUS;
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}
