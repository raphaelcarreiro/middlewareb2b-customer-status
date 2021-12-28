import { IsEnum, IsNotEmpty, Validate } from 'class-validator';
import { CnpjValidator } from 'src/common/custom-class-validators/cnpj-validator';

enum CustomerStatus {
  approved = 'apv',
  rejected = 'rpv',
}

export class CustomerStatusDto {
  @Validate(CnpjValidator)
  @IsNotEmpty({ message: 'O CNPJ é obrigatório' })
  customerDocument: string;

  @IsNotEmpty({ message: 'O status do cliente é obrigatório' })
  @IsEnum(CustomerStatus)
  status: CustomerStatus;
}
