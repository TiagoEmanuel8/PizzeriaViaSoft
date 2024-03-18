import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-login.input';
import { JwtService } from '@nestjs/jwt';
import { ApolloError } from 'apollo-server-express';
import { LoginRepository } from './repository/impl/login.repository';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: LoginRepository,
    private readonly passwordHashService: PasswordHashService,
    private readonly jwtService: JwtService,
  ) {}
  async create(createLoginDto: LoginDto): Promise<string> {
    const user = await this.loginRepository.verifyExisteField(
      createLoginDto.email,
    );

    if (
      !user ||
      !(await this.passwordHashService.comparePasswords(
        createLoginDto.password,
        user.password,
      ))
    ) {
      throw new ApolloError('Invalid email or password');
    }

    const payload = { id: user.id };
    const token = this.jwtService.sign(payload);

    return JSON.stringify(token);
  }

  findAll() {
    return `This action returns all login`;
  }
}
