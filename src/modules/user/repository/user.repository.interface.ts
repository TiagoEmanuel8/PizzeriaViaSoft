import { CreateUserDto } from '../dto/create-user.input';
import { UpdateUserDto } from '../dto/update-user.input';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  create(createOrderDto: CreateUserDto): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findOne(id: number): Promise<UserEntity>;
  findByEmailOrCpf(email: string, cpf: string): Promise<UserEntity | null>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
  remove(id: number): Promise<boolean>;
}
