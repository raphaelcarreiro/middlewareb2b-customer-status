import { Injectable } from '@nestjs/common';
import { ICustomerStatusService } from './shared/icustomer-status';

@Injectable()
export class CustomerStatusService implements ICustomerStatusService {
  approve(): void {
    //
  }
}
