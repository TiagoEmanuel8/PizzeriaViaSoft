import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class IsValidCustomizationConstraint
  implements ValidatorConstraintInterface
{
  validate(customizations: any, args: ValidationArguments) {
    const validCustomizations = ['Extra bacon', 'sem cebola', 'borda recheada'];
    return customizations.every((customization) =>
      validCustomizations.includes(customization),
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `As customizações '${args.value}' são inválidas. As customizações válidas são: Extra bacon, sem cebola, borda recheada.`;
  }
}

export function IsValidCustomization(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidCustomization',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsValidCustomizationConstraint,
    });
  };
}
