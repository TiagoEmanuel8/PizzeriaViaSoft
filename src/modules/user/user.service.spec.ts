import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './repository/impl/user.repository';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';
import { CreateUserDto } from './dto/create-user.input';
import { ApolloError } from 'apollo-server-express';
import { UserEntity } from './entities/user.entity';

jest.mock('./repository/impl/user.repository');
jest.mock('../../shared/utilities/password-hash.utility');

describe('UserService', () => {
  let service: UserService;
  let mockUserRepository: jest.Mocked<UserRepository>;
  let mockPasswordHashService: jest.Mocked<PasswordHashService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, PasswordHashService],
    }).compile();

    service = module.get<UserService>(UserService);
    mockUserRepository = module.get(UserRepository);
    mockPasswordHashService = module.get(PasswordHashService);
  });

  it('deve gerar um erro se o e-mail ou CPF já existir', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Test User',
      email: 'test@example.com',
      cpf: '12345678900',
      password: 'password',
      mobileNumber: '123456789',
      address: 'Test Address',
      district: 'Test District',
      city: 'Test City',
      cep: '12345678',
    };

    mockUserRepository.findByEmailOrCpf.mockResolvedValueOnce(new UserEntity());

    await expect(service.create(createUserDto)).rejects.toThrow(ApolloError);
  });

  it('deve criar com sucesso um usuário com senha criptografada', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Test User',
      email: 'test@example.com',
      cpf: '12345678900',
      password: 'password',
      mobileNumber: '123456789',
      address: 'Test Address',
      district: 'Test District',
      city: 'Test City',
      cep: '12345678',
    };

    const hashedPassword = 'hashedPassword';
    mockUserRepository.findByEmailOrCpf.mockResolvedValueOnce(null);
    mockPasswordHashService.hashPassword.mockResolvedValueOnce(hashedPassword);
    mockUserRepository.create.mockImplementation(
      async (user) => user as UserEntity,
    );

    const result = await service.create(createUserDto);

    expect(mockPasswordHashService.hashPassword).toHaveBeenCalledWith(
      'password',
    );
    expect(mockUserRepository.create).toHaveBeenCalledWith({
      ...createUserDto,
      password: hashedPassword,
    });
    expect(result.password).toEqual(hashedPassword);
  });
});
