import { Audit } from '../audit.entity';

export interface IAuditRepository {
  findById(id: number): Promise<Audit>;
}
