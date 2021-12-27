import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CustomerStatusService } from './customer-status.service';
import { CustomerStatusController } from './customer-status.controller';
import { raw } from 'body-parser';
import { ClientKafka } from '@nestjs/microservices';
import { kafkaSettingsService } from 'src/configs/kafka';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [AuditModule, kafkaSettingsService()],
  providers: [
    {
      provide: 'ICustomerStatusService',
      useClass: CustomerStatusService,
    },
    {
      provide: 'KafkaProducer',
      useFactory: async (kafkaService: ClientKafka) => kafkaService.connect(),
      inject: ['KafkaService'],
    },
  ],
  controllers: [CustomerStatusController],
})
export class CustomerStatusModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(raw({ type: 'application/xml' })).forRoutes('customerStatus');
  }
}
