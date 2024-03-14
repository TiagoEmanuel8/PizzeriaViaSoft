import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';

@InputType()
export class CreateOrderDto {
  @Field(() => String, { description: 'Tamanho do pedido' })
  @IsNotEmpty({ message: 'Tamanho do pedido é obrigatório' })
  @IsString({ message: 'Tamanho deve ser string' })
  size: string;

  @Field(() => String, { description: 'Sabor do pedido' })
  @IsNotEmpty({ message: 'Sabor do pedido é obrigatório' })
  @IsString({ message: 'Sabor deve ser string' })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  @IsOptional()
  @IsArray({ message: 'Adicionais deve ser array de string' })
  @IsString({ each: true, message: 'Adicionais devem ser string' })
  customizations?: string[];

  // @Field(() => Int, { description: 'Total do pedido' })
  // @IsInt({ message: 'Valor precisa ser um número' })
  // amount: number;

  // @Field(() => Int, { description: 'Tempo estimado para preparar pedido' })
  // @IsInt({ message: 'Tempo precisa ser um número inteiro' })
  // time: number;
}
