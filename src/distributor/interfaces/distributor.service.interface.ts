import { Distributor } from '../distributor.entity';

export interface IDistributorService {
  findByUsernameAndPassword(username: string, password: string): Promise<Distributor>;
}
