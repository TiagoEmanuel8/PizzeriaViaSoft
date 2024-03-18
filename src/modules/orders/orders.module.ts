import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaService } from 'src/infra/client/prisma.service';
import { OrderRepository } from './repository/impl/order.repository';
import { JwtConfigModule } from '../jwt-config.module';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';
import { JwtStrategy } from '../../shared/auth/jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtConfigModule, UserModule],
  providers: [
    OrdersResolver,
    OrdersService,
    PrismaService,
    OrderRepository,
    JwtAuthGuard,
    JwtStrategy,
  ],
})
export class OrdersModule {}
