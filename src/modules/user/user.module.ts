import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/infra/client/prisma.service';
import { UserRepository } from './repository/impl/user.repository';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';

@Module({
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    UserRepository,
    PasswordHashService,
  ],
})
export class UserModule {}
