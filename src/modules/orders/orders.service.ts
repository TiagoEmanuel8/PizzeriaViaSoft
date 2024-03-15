import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.input';
import { OrderRepository } from './repository/impl/order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrderRepository) {}

  async create(createOrderInput: CreateOrderDto) {
    // regras de negócio para definir o preço do pedido
    const amount = createOrderInput.items.reduce(
      (sum, item) => sum + item.quantity * 10,
      0,
    );
    // regras de negócio para definir o tempo de preparo do pedido
    const time = createOrderInput.items.reduce(
      (max, item) => Math.max(max, item.quantity * 5),
      0,
    );

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
