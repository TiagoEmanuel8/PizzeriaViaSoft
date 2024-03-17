import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsValidSize(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidSize',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const validSizes = ['pequena', 'media', 'grande'];
          return validSizes.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `O valor de ${args.property} é inválido: ${args.value}`;
        },
      },
    });
  };
}
