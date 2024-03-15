import { CreateOrderDto } from './create-order.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @Field(() => String)
  id: number;
}
