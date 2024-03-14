import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.input';
import { UpdateOrderDto } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  create(createOrderInput: CreateOrderDto) {
    return 'This action adds a new order';
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
