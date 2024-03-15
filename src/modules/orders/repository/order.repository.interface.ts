import { CreateOrderDto } from '../dto/create-order.dto';
// import { UpdateOrderDto } from '../dto/update-order.input';
import { OrderEntity } from '../entities/order.entity';

export interface IOrderRepository {
  create(
    createOrderDto: CreateOrderDto,
    amount: number,
    time: number,
  ): Promise<OrderEntity>;
  findAll(): Promise<OrderEntity[]>;
  findOne(id: string): Promise<OrderEntity>;
  // update(id: string, updateUserDto: UpdateOrderDto): Promise<OrderEntity>;
  remove(id: string): Promise<void>;
}
