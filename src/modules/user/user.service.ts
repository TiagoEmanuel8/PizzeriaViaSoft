import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './repository/impl/user.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserInput: CreateUserDto): Promise<UserEntity> {
    return await this.repository.create(createUserInput);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  // async update(id: any, updateOrderInput: UpdateUserInput) {
  //   return await this.repository.update(id, updateOrderInput);
  // }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
