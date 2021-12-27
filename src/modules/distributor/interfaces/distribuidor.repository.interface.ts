import { Distributor } from '../distributor.entity';

export interface IDistribuidorRepository {
  findById(id: number): Promise<Distributor>;
  findByUsernameAndPassword(username: string, password: string): Promise<Distributor>;
  findByUsername(username: string): Promise<Distributor>;
}
