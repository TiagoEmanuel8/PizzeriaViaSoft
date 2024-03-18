import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { LoginEntity } from './entities/login.entity';
import { LoginDto } from './dto/create-login.input';

@Resolver(() => LoginEntity)
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Mutation(() => String)
  createLogin(
    @Args('createLoginInput') createLoginInput: LoginDto,
  ): Promise<string> {
    return this.loginService.create(createLoginInput);
  }

  @Query(() => [LoginEntity], { name: 'login' })
  findAll() {
    return this.loginService.findAll();
  }
}
