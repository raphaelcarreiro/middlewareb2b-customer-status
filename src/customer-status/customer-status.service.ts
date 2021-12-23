import { Inject, Injectable } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { IAuditService } from 'src/audit/interface/audit.interface';
import { CustomerStatusDto } from './shared/dtos/customer-status.dto';
import { ICustomerStatusService } from './shared/interfaces/customer-status.interface';

@Injectable()
export class CustomerStatusService implements ICustomerStatusService {
  constructor(
    @Inject('KafkaProducer')
    private kafkaProducer: Producer,

    @Inject('IAuditService')
    private auditService: IAuditService,
  ) {
    //
  }

  async approve(customerStatusDto: CustomerStatusDto): Promise<void> {
    await this.validate();
    this.sendKafkaMessage(customerStatusDto);
    await this.storeAudit(customerStatusDto);
  }

  private async validate() {
    //
  }

  private sendKafkaMessage(customerStatusDto: CustomerStatusDto) {
    this.kafkaProducer.send({
      topic: 'customer_status',
      messages: [
        {
          key: 'customer_status',
          value: JSON.stringify(customerStatusDto),
        },
      ],
    });
  }

  private async storeAudit(customerStatusDto: CustomerStatusDto) {
    await this.auditService.create({
      distributor_id: 100,
      input: JSON.stringify(customerStatusDto),
    });
  }
}
