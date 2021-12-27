import { CustomerStatusDto } from '../dtos/customer-status.dto';

export interface ICustomerStatusService {
  approve(customerStatusDto: CustomerStatusDto): void;
}
