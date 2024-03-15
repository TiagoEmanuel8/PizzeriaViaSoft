import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemEntity {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Tamanho do produto' })
  size: string;

  @Field(() => String, { description: 'Sabor do produto' })
  flavor: string;

  @Field(() => [String], {
    nullable: true,
    description: 'Adicionais do produto',
  })
  customizations?: string[];

  @Field(() => Int, { description: 'Quantidade do produto' })
  quantity: number;
}
