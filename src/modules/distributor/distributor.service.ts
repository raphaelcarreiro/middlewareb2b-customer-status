import { Inject, Injectable } from '@nestjs/common';
import { Distributor } from './distributor.entity';
import { IDistribuidorRepository } from './interfaces/distribuidor.repository.interface';
import { IDistributorService } from './interfaces/distributor.service.interface';
import { Crypt } from 'src/common/crypt';

@Injectable()
export class DistributorService implements IDistributorService {
  constructor(
    @Inject('IDistributorRepository')
    private readonly distributorRepository: IDistribuidorRepository,
  ) {}

  async findByUsernameAndPassword(username: string, password: string): Promise<Distributor> {
    const encodedPassword = this.encodePassword(password);
    const distributor = await this.distributorRepository.findByUsernameAndPassword(username, encodedPassword);
    return distributor;
  }

  private encodePassword(password: string): string {
    return new Crypt().encrypt(password);
  }
}
