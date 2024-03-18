import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoginInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
