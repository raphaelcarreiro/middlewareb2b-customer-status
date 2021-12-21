import { Injectable } from '@nestjs/common';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';

@Injectable()
export class CustomerStatusService implements ICustomerStatusService {
  approve(): void {
    //
  }
}
