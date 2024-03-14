import { CreateOrderDto } from './create-order.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @Field(() => String)
  id: number;
}
