import { Test, TestingModule } from '@nestjs/testing';
import { CustomerStatusController } from './customer-status.controller';

describe('CustomerStatusController', () => {
  let controller: CustomerStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerStatusController],
    }).compile();

    controller = module.get<CustomerStatusController>(CustomerStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
