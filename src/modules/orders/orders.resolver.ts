import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';

@Resolver(() => OrderEntity)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => OrderEntity)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderDto,
    @Context() context,
  ) {
    const userId = context.req.user.id;
    return await this.ordersService.create(createOrderInput, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [OrderEntity], { name: 'orders' })
  findAll(@Context() context) {
    const userId = context.req.user.id;
    return this.ordersService.findAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => OrderEntity, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number, @Context() context) {
    const userId = context.req.user.id;
    return this.ordersService.findOne(id, userId);
  }

  @Mutation(() => OrderEntity)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id);
  }
}
