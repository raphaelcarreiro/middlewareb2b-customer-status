import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { AuditController } from './audit.controller';
import { Audit } from './audit.entity';
import { AuditRepository } from './audit.repository';
import { AuditService } from './services/audit.service';

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
      useExisting: getRepositoryToken(AuditRepository),
    },
  ],
  exports: ['IAuditService'],
})
export class AuditModule {}
