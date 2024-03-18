import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { PrismaService } from 'src/infra/client/prisma.service';
import { JwtConfigModule } from '../jwt-config.module';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';
import { LoginRepository } from './repository/impl/login.repository';

@Module({
  imports: [JwtConfigModule],
  providers: [
    LoginResolver,
    LoginService,
    PrismaService,
    LoginRepository,
    PasswordHashService,
  ],
})
export class LoginModule {}
