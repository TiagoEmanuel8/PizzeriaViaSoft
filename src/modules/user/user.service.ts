import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { UserRepository } from './repository/impl/user.repository';
import { UserEntity } from './entities/user.entity';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async create(createUser: CreateUserDto): Promise<UserEntity> {
    const { password } = createUser;

    const hashedPassword = await this.passwordHashService.hashPassword(
      password,
    );

    const userWithHashedPassword = {
      ...createUser,
      password: hashedPassword,
    };

    return await this.repository.create(userWithHashedPassword);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateOrderInput: UpdateUserDto) {
    return await this.repository.update(id, updateOrderInput);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
