import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
class OrderItemEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  size: string;

  @Field(() => String)
  flavor: string;

  @Field(() => [String], { nullable: true })
  customizations?: string[];

  @Field(() => Int)
  quantity: number;
}

@ObjectType()
export class OrderEntity {
  @Field(() => String)
  id: string;

  @Field(() => [OrderItemEntity], { description: 'Itens do pedido' })
  items: OrderItemEntity[];

  @Field(() => Float, { description: 'Total do pedido' })
  amount: number;

  @Field(() => Int, { description: 'Tempo estimado para preparar pedido' })
  time: number;
}
