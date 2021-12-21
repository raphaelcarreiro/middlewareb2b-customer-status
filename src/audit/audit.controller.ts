import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AuditDto } from './dto/audit.dto';
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

  @Post()
  async store(@Body() payload: AuditDto) {
    return await this.auditService.create(payload);
  }
}
