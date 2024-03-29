import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infra/client/prisma.service';
import { IUserRepository } from '../user.repository.interface';
import { CreateUserDto } from '../../dto/create-user.input';
import { UpdateUserDto } from '../../dto/update-user.input';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: CreateUserDto): Promise<UserEntity> {
    const newUser = await this.prisma.$transaction(async (prisma) => {
      return await prisma.user.create({
        data: userData,
      });
    });

    return newUser as unknown as UserEntity;
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        mobileNumber: true,
        address: true,
        district: true,
        city: true,
        cep: true,
      },
    });
    return users as unknown as UserEntity[];
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        mobileNumber: true,
        address: true,
        district: true,
        city: true,
        cep: true,
      },
    });
    return user as unknown as UserEntity;
  }

  async findByEmailOrCpf(
    email: string,
    cpf: string,
  ): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email }, { cpf }],
      },
    });
    return user as unknown as UserEntity | null;
  }

  async authUser(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user as unknown as UserEntity | null;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const updateUser = await this.prisma.order.update({
      where: { id },
      data: updateUserDto,
    });
    return updateUser as unknown as UserEntity;
  }

  async remove(id: number): Promise<boolean> {
    await this.prisma.user.delete({
      where: { id },
    });
    return true;
  }
}
