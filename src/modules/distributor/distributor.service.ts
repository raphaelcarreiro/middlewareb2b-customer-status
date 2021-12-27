import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Distributor } from './distributor.entity';
import { IDistribuidorRepository } from './interfaces/distribuidor.repository.interface';
import { IDistributorService } from './interfaces/distributor.service.interface';
import { compareSync } from 'bcrypt';

@Injectable()
export class DistributorService implements IDistributorService {
  constructor(
    @Inject('IDistributorRepository')
    private readonly distributorRepository: IDistribuidorRepository,
  ) {}

  async findByUsernameAndPassword(username: string, hashedPassword: string): Promise<Distributor> {
    const distributor = await this.distributorRepository.findByUsername(username);

    this.comparePassword(distributor.password, hashedPassword);

    return distributor;
  }

  private comparePassword(password: string, hashedPassword: string) {
    const matched = compareSync(password, hashedPassword);

    if (!matched) {
      throw new HttpException('Distribuidor não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
