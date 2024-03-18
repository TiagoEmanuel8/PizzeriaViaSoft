import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LoginEntity {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  token?: string;
}
