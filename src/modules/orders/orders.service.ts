import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.input';
import { OrderRepository } from './repository/impl/order.repository';
import { OrderEntity } from './entities/order.entity';
import { calculateItemPreparationTime } from '../../shared/utilities/calculateTime.utility';
import { calculateItemAmount } from '../../shared/utilities/calculateAmount.utility';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrderRepository) {}

  async create(
    createOrderInput: CreateOrderDto,
    userId: number,
  ): Promise<OrderEntity> {
    const amount = createOrderInput.items
      .map((item) => calculateItemAmount(item))
      .reduce((sum, itemTime) => sum + itemTime, 0);

    const time = createOrderInput.items
      .map((item) => calculateItemPreparationTime(item))
      .reduce((sum, itemTime) => sum + itemTime, 0);

    const orderData = {
      ...createOrderInput,
      userId,
      amount,
      time,
      items: {
        create: createOrderInput.items.map((item) => ({
          size: item.size,
          flavor: item.flavor,
          customizations: item.customizations || [],
          quantity: item.quantity,
        })),
      },
    };

    return await this.repository.create(orderData);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  // async update(id: any, updateOrderInput: UpdateOrderDto) {
  //   return await this.repository.update(id, updateOrderInput);
  // }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
