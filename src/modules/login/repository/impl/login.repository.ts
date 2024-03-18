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
}
