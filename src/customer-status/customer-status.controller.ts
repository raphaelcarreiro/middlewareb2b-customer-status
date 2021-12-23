import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';
import { XmlToJsonParser } from 'src/helpers/xml-json-parser.helper';

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

    return 'ok';
  }

  private parse(xml: string) {
    const parser = new XmlToJsonParser(xml);
    return parser.handle();
  }
}
