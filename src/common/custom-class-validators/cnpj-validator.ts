import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { cnpjValidator } from '../cnpj-validator.helper';

@ValidatorConstraint({ name: 'cnpjValidator', async: false })
export class CnpjValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return cnpjValidator(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'CNPJ inválido';
  }
}
