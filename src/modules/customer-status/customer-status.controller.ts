import { Body, Controller, HttpCode, Inject, Post, UseGuards } from '@nestjs/common';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';
import { XmlToJsonParser } from 'src/common/xml-json-parser.helper';
import { BasicGuard } from '../auth/basic.guard';

@UseGuards(BasicGuard)
@Controller('/customerStatus')
export class CustomerStatusController {
  constructor(
    @Inject('ICustomerStatusService')
    private readonly customerStatusService: ICustomerStatusService,
  ) {}

  @HttpCode(200)
  @Post()
  approve(@Body() customerStatus: string) {
    const customerStatusDto = this.parse(customerStatus);
    this.customerStatusService.approve(customerStatusDto);

    return {
      status: 'success',
    };
  }

  private parse(xml: string) {
    const parser = new XmlToJsonParser(xml);
    return parser.handle();
  }
}
