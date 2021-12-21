import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerStatusModule } from './customer-status/customer-status.module';

@Module({
  imports: [CustomerStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
