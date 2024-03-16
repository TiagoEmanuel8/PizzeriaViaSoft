import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { OrderItemEntity } from './order-item.entity';

@ObjectType()
export class OrderEntity {
  @Field(() => String)
  id: string;

  @Field(() => [OrderItemEntity], { description: 'Itens do pedido' })
  items: OrderItemEntity[];

  @Field(() => String, { description: 'Nome do cliente' })
  name: string;

  @Field(() => String, { description: 'Endereço do cliente' })
  address: string;

  @Field(() => String, { description: 'Bairro do cliente' })
  district: string;

  @Field(() => String, { description: 'Cidade do cliente' })
  city: string;

  @Field(() => String, { description: 'CEP do cliente' })
  cep: string;

  @Field(() => Float, { description: 'Valor total do pedido' })
  amount: number;

  @Field(() => Int, { description: 'Tempo estimado para preparar o pedido' })
  time: number;

  @Field(() => String, { description: 'Número de celular' })
  mobileNumber: number;

  @Field(() => String, {
    nullable: true,
    description: 'Observações sobre o pedido',
  })
  observation?: string;
}
