import { Body, Controller, HttpCode, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';
import { XmlToJsonParser } from 'src/helpers/xml-json-parser.helper';
import { Request } from 'express';
import { BasicGuard } from 'src/auth/basic.guard';

@UseGuards(BasicGuard)
@Controller('/customerStatus')
export class CustomerStatusController {
  constructor(
    @Inject('ICustomerStatusService')
    private readonly customerStatusService: ICustomerStatusService,
  ) {}

  @HttpCode(200)
  @Post()
  approve(@Body() customerStatus: string, @Req() request: Request) {
    const customerStatusDto = this.parse(customerStatus);
    console.log(request);
    // this.customerStatusService.approve(customerStatusDto);

    return 'ok';
  }

  private parse(xml: string) {
    const parser = new XmlToJsonParser(xml);
    return parser.handle();
  }
}
