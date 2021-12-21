import { Audit } from '../audit.entity';

export interface IAuditService {
  show(id: number): Promise<Audit>;
}
