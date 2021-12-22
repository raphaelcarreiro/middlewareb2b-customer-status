import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CustomerStatusService } from './customer-status.service';
import { CustomerStatusController } from './customer-status.controller';
import { XmlBodyMiddleware } from 'src/http/middleware/xml-body.middleware';

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
    consumer.apply(XmlBodyMiddleware).forRoutes('customerStatus');
  }
}
