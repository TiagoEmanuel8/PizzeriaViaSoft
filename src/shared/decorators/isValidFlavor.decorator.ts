import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsValidFlavor(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidFlavor',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const validFlavors = ['calabresa', 'marguerita', 'portuguesa'];
          return validFlavors.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `O sabor '${args.value}' é inválido. Os sabores válidos são: calabresa, marguerita, portuguesa.`;
        },
      },
    });
  };
}
