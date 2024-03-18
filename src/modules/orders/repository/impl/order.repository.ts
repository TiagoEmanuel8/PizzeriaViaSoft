import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infra/client/prisma.service';
import { IOrderRepository } from '../order.repository.interface';
// import { UpdateOrderDto } from '../../dto/update-order.input';
import { OrderEntity } from '../../entities/order.entity';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(orderData: any): Promise<OrderEntity> {
    const newOrder = await this.prisma.$transaction(async (prisma) => {
      return await prisma.order.create({
        data: orderData,
        include: {
          items: true,
        },
      });
    });

    return newOrder as unknown as OrderEntity;
  }

  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.prisma.order.findMany();
    return orders as unknown as OrderEntity[];
  }

  async findOne(id: number): Promise<OrderEntity> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });
    return order as unknown as OrderEntity;
  }

  // async update(
  //   id: string,
  //   updateUserDto: UpdateOrderDto,
  // ): Promise<OrderEntity> {
  //   const updateOrder = await this.prisma.order.update({
  //     where: { id },
  //     data: updateUserDto,
  //   });
  //   return updateOrder as OrderEntity;
  // }

  async remove(id: number): Promise<void> {
    await this.prisma.order.delete({
      where: { id },
    });
  }
}
