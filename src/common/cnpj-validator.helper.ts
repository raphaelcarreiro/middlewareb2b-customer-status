const INVALID_VALUES = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

const CNPJ_LENGTH = 14;

export function cnpjValidator(cnpj: string): boolean {
  const rawCnpj = sanitize(cnpj);

  if (!checkForInvalidValues(rawCnpj)) {
    return false;
  }

  if (!validateFirstDigit(rawCnpj)) {
    return false;
  }

  if (!validateSecondDigit(rawCnpj)) {
    return false;
  }

  return true;
}

function checkForInvalidValues(cnpj: string): boolean {
  if (!cnpj) {
    return false;
  }

  if (cnpj.length !== CNPJ_LENGTH) {
    return false;
  }

  const matchedInvalidValue = INVALID_VALUES.some((invalidValue) => invalidValue === cnpj);

  if (matchedInvalidValue) {
    return false;
  }

  return true;
}

function validateFirstDigit(value: string): boolean {
  const numbers = value.substring(0, value.length - 2);
  const firstDigit = getFirstDigit(value);

  return validateModule11DigitChecker(numbers, 5, +firstDigit);
}

function validateSecondDigit(value: string) {
  const numbers = value.substring(0, value.length - 1);
  const secondDigit = getSecondDigit(value);

  return validateModule11DigitChecker(numbers, 6, +secondDigit);
}

function validateModule11DigitChecker(numbers: string, multiplierNumberStart: number, digit: number) {
  let position = multiplierNumberStart;

  const sum = numbers.split('').reduce((sum, number) => {
    sum = sum + parseInt(number) * position--;
    if (position < 2) position = 9;

    return sum;
  }, 0);

  const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return result === digit;
}

function getFirstDigit(cnpj: string): string {
  const digits = cnpj.substring(cnpj.length - 2);
  return digits.charAt(0);
}

function getSecondDigit(cnpj: string): string {
  const digits = cnpj.substring(cnpj.length - 1);
  return digits.charAt(0);
}

function sanitize(cnpj: string): string {
  return cnpj.replace(/[^\d]+/g, '');
}
