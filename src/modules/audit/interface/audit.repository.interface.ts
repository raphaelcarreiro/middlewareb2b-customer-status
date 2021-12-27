import { Audit } from '../audit.entity';
import { AuditDto } from '../dto/audit.dto';

export interface IAuditRepository {
  findById(id: number): Promise<Audit>;
  store(audit: AuditDto): Promise<Audit>;
}
