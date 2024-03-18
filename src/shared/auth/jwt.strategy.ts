import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApolloError } from 'apollo-server-express';
import { UserRepository } from '../../modules/user/repository/impl/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly repository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(payload: any) {
    const email = payload.email;
    const user = await this.repository.authUser(email);
    if (!user) {
      throw new ApolloError('User not found');
    }
    return user;
  }
}
