import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from './create-order-item.dto';

@InputType()
export class CreateOrderDto {
  @Field(() => [CreateOrderItemDto])
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  @Field(() => String, {
    nullable: true,
    description: 'Observações sobre o pedido',
  })
  @IsOptional()
  observation?: string;
}
