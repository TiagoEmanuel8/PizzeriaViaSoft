import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
} from 'class-validator';

@InputType()
export class CreateOrderItemDto {
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

  @Field(() => Int, { description: 'Quantidade de pizza' })
  @IsNotEmpty({ message: 'Quantidade é obrigatório' })
  @IsInt({ message: 'Quantidade precisa ser um número inteiro' })
  quantity: number;
}
