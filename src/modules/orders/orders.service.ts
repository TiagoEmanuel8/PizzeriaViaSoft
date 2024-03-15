import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.input';
import { UpdateOrderDto } from './dto/update-order.input';
import { OrderRepository } from './repository/impl/order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrderRepository) {}

  async create(createOrderInput: CreateOrderDto) {
    // definir essas funções externamente
    const amount = 1;
    const time = 1;
    return await this.repository.create(createOrderInput, amount, time);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
