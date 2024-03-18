import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderEntity } from '../entities/order.entity';

export interface IOrderRepository {
  create(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
  findAll(userId: number): Promise<OrderEntity[]>;
  findOne(id: number, userId: number): Promise<OrderEntity>;
  remove(id: number): Promise<void>;
}
