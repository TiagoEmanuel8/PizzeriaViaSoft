import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { JwtConfigModule } from '../jwt-config.module';

@Module({
  imports: [JwtConfigModule],
  providers: [LoginResolver, LoginService],
})
export class LoginModule {}
