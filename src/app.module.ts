import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from './audit/audit.entity';
import { AuditModule } from './audit/audit.module';
import { CustomerStatusModule } from './customer-status/customer-status.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Audit],
    }),
    CustomerStatusModule,
    AuditModule,
  ],
})
export class AppModule {}
