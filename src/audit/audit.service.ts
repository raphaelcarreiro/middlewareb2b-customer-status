import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audit } from './audit.entity';
import { AuditRepository } from './audit.repository';
import { IAuditService } from './interface/audit.interface';
import { IAuditRepository } from './interface/audit.repository.interface';

@Injectable()
export class AuditService implements IAuditService {
  constructor(
    @InjectRepository(AuditRepository)
    private readonly auditRepository: IAuditRepository,
  ) {}

  show(id: number): Promise<Audit> {
    return this.auditRepository.findById(+id);
  }
}
