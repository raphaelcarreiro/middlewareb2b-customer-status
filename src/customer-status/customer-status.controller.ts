import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CustomerStatusDto } from './shared/dtos/customer-status.dto';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';

@Controller('/customerStatus')
export class CustomerStatusController {
  constructor(
    @Inject('ICustomerStatusService')
    private readonly customerStatusService: ICustomerStatusService,
  ) {}

  @Post()
  approve(@Body() customerStatus: CustomerStatusDto) {
    //
  }
}
