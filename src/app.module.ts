import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from './audit/audit.entity';
import { AuditModule } from './audit/audit.module';
import { CustomerStatusModule } from './customer-status/customer-status.module';
import { AuthModule } from './auth/auth.module';
import { DistributorModule } from './distributor/distributor.module';
import { Distributor } from './distributor/distributor.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Audit, Distributor],
    }),
    CustomerStatusModule,
    AuditModule,
    AuthModule,
    DistributorModule,
  ],
})
export class AppModule {}
