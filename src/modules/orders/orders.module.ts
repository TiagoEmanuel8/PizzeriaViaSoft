import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaService } from 'src/infra/client/prisma.service';
import { OrderRepository } from './repository/impl/order.repository';

@Module({
  providers: [OrdersResolver, OrdersService, PrismaService, OrderRepository],
})
export class OrdersModule {}
