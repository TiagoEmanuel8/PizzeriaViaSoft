import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
} from 'class-validator';
import { IsValidSize } from '../../../shared/decorators/isValidSize.decorator';
import { IsValidFlavor } from '../../../shared/decorators/isValidFlavor.decorator';

@InputType()
export class CreateOrderItemDto {
  @Field(() => String, { description: 'Tamanho da pizza' })
  @IsNotEmpty({ message: 'Tamanho da pizza é obrigatório' })
  @IsValidSize({
    message:
      'O tamanho deve ser um dos seguintes valores: pequena, media, G, grande',
  })
  size: string;

  @Field(() => String, { description: 'Sabor da pizza' })
  @IsNotEmpty({ message: 'Sabor da pizza é obrigatório' })
  @IsValidFlavor({
    message:
      'O sabor deve ser um dos seguintes valores: calabresa, marguerita, portuguesa',
  })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  @IsOptional()
  @IsArray({ message: 'Adicionais devem ser array de string' })
  @IsString({ each: true, message: 'Cada adicional deve ser uma string' })
  customizations?: string[];

  @Field(() => Int, { description: 'Quantidade de pizza' })
  @IsNotEmpty({ message: 'Quantidade é obrigatório' })
  @IsInt({ message: 'Quantidade precisa ser um número inteiro' })
  quantity: number;
}
