import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributorModule } from './modules/distributor/distributor.module';
import { Distributor } from './modules/distributor/distributor.entity';
import { Audit } from './modules/audit/audit.entity';
import { CustomerStatusModule } from './modules/customer-status/customer-status.module';
import { AuditModule } from './modules/audit/audit.module';
import { AuthModule } from './modules/auth/auth.module';

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
