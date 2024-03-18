import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infra/client/prisma.service';
import { UserEntity } from '../../../../modules/user/entities/user.entity';
import { ILoginRepository } from '../login.repository.interface';

@Injectable()
export class LoginRepository implements ILoginRepository {
  constructor(private readonly prisma: PrismaService) {}

  async verifyExisteField(email: string): Promise<UserEntity | null> {
    const findUser = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return findUser as UserEntity;
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
}
