import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class CreateOrderItemDto {
  @Field(() => String, { description: 'Tamanho da pizza' })
  @IsNotEmpty({ message: 'Tamanho da pizza é obrigatório' })
  @IsString({ message: 'Tamanho deve ser do tipo string' })
  size: string;

  @Field(() => String, { description: 'Sabor da pizza' })
  @IsNotEmpty({ message: 'Sabor da pizza é obrigatório' })
  @IsString({ message: 'Sabor deve ser do tipo string' })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  @IsOptional()
  @IsArray({ message: 'Adicionais devem ser array de string' })
  @IsString({ each: true, message: 'Cada adicional deve ser uma string' })
  customizations?: string[];

  @Field(() => Int, { description: 'Quantidade do produto' })
  @IsNotEmpty({ message: 'Tamanho da pizza é obrigatório' })
  @IsInt({ message: 'Quantidade precisa ser um número inteiro' })
  quantity: number;
}

@InputType()
export class CreateOrderDto {
  @Field(() => [CreateOrderItemDto])
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}
