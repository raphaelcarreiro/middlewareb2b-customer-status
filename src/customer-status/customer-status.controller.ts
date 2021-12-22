import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';
import { XmlToJsonParser } from 'src/helpers/xml-json-parser.helper';

@Controller('/customerStatus')
export class CustomerStatusController {
  constructor(
    @Inject('ICustomerStatusService')
    private readonly customerStatusService: ICustomerStatusService,
  ) {}

  @Post()
  approve(@Body() customerStatus: string) {
    return this.parse(customerStatus);
  }

  private parse(xml: string) {
    const parser = new XmlToJsonParser(xml);
    return parser.handle();
  }
}
