import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Distributor } from './distributor.entity';
import { IDistribuidorRepository } from './interfaces/distribuidor.repository.interface';
import { IDistributorService } from './interfaces/distributor.service.interface';
import { compareSync } from 'bcrypt';
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

  private comparePassword(password: string, hashedPassword: string) {
    const matched = compareSync(password, hashedPassword);

    if (!matched) {
      throw new HttpException('Distribuidor não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
