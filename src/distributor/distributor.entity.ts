import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
