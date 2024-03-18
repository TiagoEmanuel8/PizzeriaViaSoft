import { UserEntity } from '../../../modules/user/entities/user.entity';

export interface ILoginRepository {
  verifyExisteField(email: string): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
}
