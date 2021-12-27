import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';

@Entity('Distribuidor')
export class Distributor {
  @PrimaryGeneratedColumn({
    name: 'DistribuidorId',
  })
  id: number;

  @Column({
    name: 'Distribuidor',
  })
  company_name: string;

  @Column({
    name: 'UsuarioDistribuidor',
  })
  username: string;

  @Column({
    name: 'SenhaDistribuidor',
  })
  password: string;

  @BeforeInsert()
  private beforeInsert() {
    this.password = hashSync(this.password, 8);
  }
}
