import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CustomerStatusDto } from './shared/dto/customer-status.dto';
import { ICustomerStatusService } from './shared/ICustomerStatus';

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
