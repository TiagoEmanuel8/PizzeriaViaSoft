import { CreateUserDto } from '../dto/create-user.input';
// import { UpdateOrderDto } from '../dto/update-order.input';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  create(createOrderDto: CreateUserDto): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findOne(id: number): Promise<UserEntity>;
  // update(id: string, updateUserDto: UpdateOrderDto): Promise<OrderEntity>;
  remove(id: number): Promise<void>;
}
