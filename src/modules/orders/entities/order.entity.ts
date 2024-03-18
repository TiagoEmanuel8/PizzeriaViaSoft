import { ObjectType, Field, Float, Int, ID } from '@nestjs/graphql';
import { OrderItemEntity } from './order-item.entity';
import { UserOrderEntity } from './user.entity';

@ObjectType()
export class OrderEntity {
  @Field(() => String)
  id: string;

  @Field(() => [OrderItemEntity], { description: 'Itens do pedido' })
  items: OrderItemEntity[];

  @Field(() => ID, { description: 'Id do usuário' })
  userId: number;

  @Field(() => UserOrderEntity, { description: 'Usuário que fez o pedido' })
  user: UserOrderEntity;

  @Field(() => Float, { description: 'Valor total do pedido' })
  amount: number;

  @Field(() => Int, { description: 'Tempo estimado para preparar o pedido' })
  time: number;

  @Field(() => String, {
    nullable: true,
    description: 'Observações sobre o pedido',
  })
  observation?: string;
}
