import { Module } from '@nestjs/common';
import { CustomerStatusModule } from './customer-status/customer-status.module';

@Module({
  imports: [CustomerStatusModule],
})
export class AppModule {}
