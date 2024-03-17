import { Field, ObjectType, ID } from '@nestjs/graphql';
import { OrderEntity } from '../../orders/entities/order.entity';

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  password: string;

  @Field()
  mobileNumber: string;

  @Field()
  address: string;

  @Field()
  district: string;

  @Field()
  city: string;

  @Field()
  cep: string;

  @Field(() => [OrderEntity], { nullable: 'itemsAndList' })
  orders?: OrderEntity[];
}
