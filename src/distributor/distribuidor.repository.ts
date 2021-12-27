import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Distributor } from './distributor.entity';
import { IDistribuidorRepository } from './interfaces/distribuidor.repository.interface';

@EntityRepository(Distributor)
export class DistributorRepository extends Repository<Distributor> implements IDistribuidorRepository {
  async findById(id: number): Promise<Distributor> {
    const distributor = await this.findById(id);

    if (!distributor) {
      throw new HttpException('Distribuidor não encontrado', HttpStatus.NOT_FOUND);
    }

    return distributor;
  }

  async findByUsernameAndPassword(username: string, password: string): Promise<Distributor> {
    const distribuidor = await this.findOne({
      where: {
        username,
        password,
      },
    });

    if (!distribuidor) {
      throw new HttpException('Distribuidor não encontrado', HttpStatus.NOT_FOUND);
    }

    return distribuidor;
  }
}
