import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUser: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.create(createUser);
  }

  @Query(() => [UserEntity], { name: 'findAllUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserEntity, { name: 'findUserById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.userService.remove(+id);
  }
}
