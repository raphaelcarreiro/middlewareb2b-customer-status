import { Module } from '@nestjs/common';
import { CustomerStatusService } from './customer-status.service';
import { CustomerStatusController } from './customer-status.controller';

@Module({
  providers: [
    {
      provide: 'ICustomerStatus',
      useClass: CustomerStatusService,
    },
  ],
  controllers: [CustomerStatusController],
})
export class CustomerStatusModule {}
