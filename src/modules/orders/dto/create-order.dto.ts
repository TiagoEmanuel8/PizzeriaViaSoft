import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from './create-order-item.dto';

@InputType()
export class CreateOrderDto {
  @Field(() => [CreateOrderItemDto])
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  @Field(() => String, { description: 'Nome do cliente' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser do tipo string' })
  name: string;

  @Field(() => String, { description: 'Endereço do cliente' })
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  @IsString({ message: 'Endereço deve ser do tipo string' })
  address: string;

  @Field(() => String, { description: 'Bairro do cliente' })
  @IsNotEmpty({ message: 'Bairro é obrigatório' })
  @IsString({ message: 'Bairro deve ser do tipo string' })
  district: string;

  @Field(() => String, { description: 'Cidade do cliente' })
  @IsNotEmpty({ message: 'Cidade é obrigatória' })
  @IsString({ message: 'Cidade deve ser do tipo string' })
  city: string;

  @Field(() => String, { description: 'CEP do cliente' })
  @IsNotEmpty({ message: 'CEP é obrigatório' })
  @IsString({ message: 'CEP deve ser do tipo string numérica' })
  cep: string;

  @Field(() => String, {
    nullable: true,
    description: 'Observações sobre o pedido',
  })
  @IsOptional()
  observation?: string;

  @Field(() => String, { description: 'Número de celular' })
  @IsNotEmpty({ message: 'Número de celular é obrigatório' })
  @IsString({ message: 'Número de celular deve ser do tipo string' })
  mobileNumber: string;

  // @Field(() => Int, { description: 'Valor total da compra' })
  // @IsNotEmpty({ message: 'Valor total da compra não deve ser vazio' })
  // @IsNumber({}, { message: 'Valor total é obrigatório e deve ser um número' })
  // amount?: number;

  // @Field(() => Int, { description: 'Tempo estimado da entrega' })
  // @IsNumber(
  //   {},
  //   { message: 'Tempo estimado é obrigatório e deve ser um número' },
  // )
  // time?: number;
}
