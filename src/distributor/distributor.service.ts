import { Inject, Injectable } from '@nestjs/common';
import { Distributor } from './distributor.entity';
import { IDistribuidorRepository } from './interfaces/distribuidor.repository.interface';
import { IDistributorService } from './interfaces/distributor.service.interface';

@Injectable()
export class DistributorService implements IDistributorService {
  constructor(
    @Inject('IDistributorRepository')
    private readonly distributorRepository: IDistribuidorRepository,
  ) {}

  findByUsernameAndPassword(username: string, password: string): Promise<Distributor> {
    return this.distributorRepository.findByUsernameAndPassword(username, password);
  }
}
