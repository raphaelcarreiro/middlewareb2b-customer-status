import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IAuditService } from './interface/audit.interface';

@Controller('/audits')
export class AuditController {
  constructor(
    @Inject('IAuditService')
    private auditService: IAuditService,
  ) {}

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.auditService.show(+id);
  }
}
