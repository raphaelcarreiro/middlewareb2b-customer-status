import { Inject, Injectable } from '@nestjs/common';
import { Audit } from './audit.entity';
import { IAuditService } from './interface/audit.interface';
import { IAuditRepository } from './interface/audit.repository.interface';

@Injectable()
export class AuditService implements IAuditService {
  constructor(
    @Inject('IAuditRepository')
    private auditRepository: IAuditRepository,
  ) {}

  show(id: number): Promise<Audit> {
    return this.auditRepository.findById(+id);
  }
}
