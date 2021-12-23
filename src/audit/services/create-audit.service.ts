import { InjectRepository } from '@nestjs/typeorm';
import { Audit } from '../audit.entity';
import { AuditRepository } from '../audit.repository';
import { AuditDto } from '../dto/audit.dto';
import { IAuditRepository } from '../interface/audit.repository.interface';

export class CreateAuditService {
  constructor(
    @InjectRepository(AuditRepository)
    private readonly auditRepository: IAuditRepository,
  ) {}

  execute(payload: AuditDto): Promise<Audit> {
    return this.auditRepository.store(payload);
  }
}
