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
import { IsValidCustomization } from '../../../shared/decorators/isValidCustomization.decorator';

@InputType()
export class CreateOrderItemDto {
  @Field(() => String, { description: 'Tamanho da pizza' })
  @IsNotEmpty({ message: 'Tamanho da pizza é obrigatório' })
  @IsValidSize({
    message: 'Os tamanhos devem ser: pequena, media, G, grande',
  })
  size: string;

  @Field(() => String, { description: 'Sabor da pizza' })
  @IsNotEmpty({ message: 'Sabor da pizza é obrigatório' })
  @IsValidFlavor({
    message: 'Os sabores devem ser: calabresa, marguerita, portuguesa',
  })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  @IsOptional()
  @IsArray({ message: 'Adicionais devem ser array de string' })
  @IsString({ each: true, message: 'Cada adicional deve ser uma string' })
  @IsValidCustomization({
    message:
      'As customizações devem ser: extra bacon, sem cebola, borda recheada',
  })
  customizations?: string[];

  @Field(() => Int, { description: 'Quantidade de pizza' })
  @IsNotEmpty({ message: 'Quantidade é obrigatório' })
  @IsInt({ message: 'Quantidade precisa ser um número inteiro' })
  quantity: number;
}
