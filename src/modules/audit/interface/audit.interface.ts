import { Audit } from '../audit.entity';
import { AuditDto } from '../dto/audit.dto';

export interface IAuditService {
  show(id: number): Promise<Audit>;
  create(audit: AuditDto): Promise<Audit>;
}
