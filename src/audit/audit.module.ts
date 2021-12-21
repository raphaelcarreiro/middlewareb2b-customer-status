import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditController } from './audit.controller';
import { Audit } from './audit.entity';
import { AuditRepository } from './audit.repository';
import { AuditService } from './audit.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuditRepository, Audit])],
  controllers: [AuditController],
  providers: [
    {
      provide: 'IAuditService',
      useClass: AuditService,
    },
    {
      provide: 'IAuditRepository',
      useClass: AuditRepository,
    },
  ],
})
export class AuditModule {}
