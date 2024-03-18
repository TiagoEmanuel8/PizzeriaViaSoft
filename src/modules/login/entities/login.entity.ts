import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LoginEntity {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;
}
