import { Test, TestingModule } from '@nestjs/testing';
import { CustomerStatusService } from './customer-status.service';

describe('CustomerStatusService', () => {
  let service: CustomerStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerStatusService],
    }).compile();

    service = module.get<CustomerStatusService>(CustomerStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
