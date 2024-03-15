import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemEntity {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Tamanho do pedido' })
  size: string;

  @Field(() => String, { description: 'Sabor do pedido' })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  customizations?: string[];

  @Field(() => Int, { description: 'Sabor do pedido' })
  quantity: string;
}
