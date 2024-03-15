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

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async update(id: any, updateOrderInput: UpdateOrderDto) {
    return await this.repository.update(id, updateOrderInput);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
