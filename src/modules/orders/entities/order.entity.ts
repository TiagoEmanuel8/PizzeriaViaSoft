import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Tamanho do pedido' })
  size: string;

  @Field(() => String, { description: 'Sabor do pedido' })
  flavor: string;

  @Field(() => [String], {
    description: 'Adicionais do pedido',
    nullable: true,
  })
  customizations?: string[];

  @Field(() => Int, { description: 'Total do pedido' })
  amount: number;

  @Field(() => Int, { description: 'Tempo estimado para preparar pedido' })
  time: number;
}
