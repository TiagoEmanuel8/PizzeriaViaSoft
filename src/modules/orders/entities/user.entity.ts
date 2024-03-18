import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserOrderEntity {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

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
}
