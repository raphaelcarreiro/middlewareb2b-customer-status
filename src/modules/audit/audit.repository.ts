import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Audit } from './audit.entity';
import { AuditDto } from './dto/audit.dto';
import { IAuditRepository } from './interface/audit.repository.interface';

@EntityRepository(Audit)
export class AuditRepository extends Repository<Audit> implements IAuditRepository {
  async findById(id: number): Promise<Audit> {
    const audit = await this.findOne({
      where: {
        id,
      },
    });

    if (!audit) {
      throw new HttpException('Audit not found', HttpStatus.NOT_FOUND);
    }

    return audit;
  }

  async store(payload: AuditDto) {
    const audit = this.create(payload);

    await this.save(audit);

    return audit;
  }
}
