import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infra/client/prisma.service';
import { IUserRepository } from '../user.repository.interface';
import { CreateUserDto } from '../../dto/create-user.input';
// import { UpdateOrderDto } from '../../dto/update-order.input';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: any): Promise<UserEntity> {
    const newUser = await this.prisma.$transaction(async (prisma) => {
      return await prisma.user.create({
        data: userData,
      });
    });

    return newUser as unknown as UserEntity;
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users as unknown as UserEntity[];
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user as unknown as UserEntity;
  }

  // async update(
  //   id: string,
  //   updateUserDto: UpdateOrderDto,
  // ): Promise<OrderEntity> {
  //   const updateUser = await this.prisma.order.update({
  //     where: { id },
  //     data: updateUserDto,
  //   });
  //   return updateUser as OrderEntity;
  // }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
