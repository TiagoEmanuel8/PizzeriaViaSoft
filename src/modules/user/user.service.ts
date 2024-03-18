import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { UserRepository } from './repository/impl/user.repository';
import { UserEntity } from './entities/user.entity';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async create(createUser: CreateUserDto): Promise<UserEntity> {
    const { password, email, cpf } = createUser;

    const userExists = await this.repository.findByEmailOrCpf(email, cpf);
    if (userExists) {
      throw new ApolloError(
        'Email ou CPF já estão em uso',
        'USER_ALREADY_EXISTS',
      );
    }

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
