import { Injectable } from '@nestjs/common';
import { ICustomerStatusService } from './shared/ICustomerStatus';

@Injectable()
export class CustomerStatusService implements ICustomerStatusService {
  approve(): void {
    //
  }
}
