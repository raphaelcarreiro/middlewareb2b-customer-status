import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auditoriab2b')
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  distributor_id: number;

  @Column()
  input: string;

  @Column()
  output: string;

  @Column()
  output_at: Date;

  @Column({ type: 'timestamp' })
  created_at: Date;
}
