import { Inject, Injectable } from '@nestjs/common';
import { Audit } from '../audit.entity';
import { AuditDto } from '../dto/audit.dto';
import { IAuditService } from '../interface/audit.interface';
import { IAuditRepository } from '../interface/audit.repository.interface';
import { CreateAuditService } from './create-audit.service';

@Injectable()
export class AuditService implements IAuditService {
  constructor(
    @Inject('IAuditRepository')
    private readonly auditRepository: IAuditRepository,
  ) {}

  create(audit: AuditDto): Promise<Audit> {
    const createAuditService = new CreateAuditService(this.auditRepository);
    return createAuditService.execute(audit);
  }

  show(id: number): Promise<Audit> {
    return this.auditRepository.findById(+id);
  }
}
