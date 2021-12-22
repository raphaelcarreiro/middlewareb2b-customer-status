import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CustomerStatusService } from './customer-status.service';
import { CustomerStatusController } from './customer-status.controller';
import { raw } from 'body-parser';

@Module({
  providers: [
    {
      provide: 'ICustomerStatusService',
      useClass: CustomerStatusService,
    },
  ],
  controllers: [CustomerStatusController],
})
export class CustomerStatusModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(raw({ type: 'application/xml' })).forRoutes('customerStatus');
  }
}
