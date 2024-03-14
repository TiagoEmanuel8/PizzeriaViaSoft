import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.input';
import { UpdateOrderDto } from './dto/update-order.input';

@Resolver(() => OrderEntity)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => OrderEntity)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderDto) {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [OrderEntity], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => OrderEntity, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => OrderEntity)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderDto) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => OrderEntity)
  removeOrder(@Args('id', { type: () => Int }) id: string) {
    return this.ordersService.remove(id);
  }
}
