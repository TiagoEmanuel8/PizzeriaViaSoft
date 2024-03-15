import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infra/client/prisma.service';
import { IOrderRepository } from '../order.repository.interface';
import { CreateOrderDto } from '../../dto/create-order.input';
import { UpdateOrderDto } from '../../dto/update-order.input';
import { OrderEntity } from '../../entities/order.entity';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createOrderDto: CreateOrderDto,
    amount: number,
    time: number,
  ): Promise<OrderEntity> {
    const newOrder = await this.prisma.order.create({
      data: {
        ...createOrderDto,
        amount,
        time,
      },
    });
    return newOrder as OrderEntity;
  }

  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.prisma.order.findMany();
    return orders as OrderEntity[];
  }

  async findOne(id: string): Promise<OrderEntity> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });
    return order as OrderEntity;
  }

  async update(
    id: string,
    updateUserDto: UpdateOrderDto,
  ): Promise<OrderEntity> {
    const updateOrder = await this.prisma.order.update({
      where: { id },
      data: updateUserDto,
    });
    return updateOrder as OrderEntity;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.order.delete({
      where: { id },
    });
  }
}
