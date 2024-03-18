import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.input';

const mockUserService = {
  create: jest.fn(),
};

describe('UserResolver Tests', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: UserService, useValue: mockUserService },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    mockUserService.create.mockClear();
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createUser', () => {
    it('deve chamar UserService.create com os parâmetros corretos', async () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        password: '123456',
        name: 'Test User',
        cpf: '123.456.789-10',
        mobileNumber: '1234567890',
        address: 'Test Address',
        district: 'Test District',
        city: 'Test City',
        cep: '12345-678',
      };
      mockUserService.create.mockResolvedValue({ id: 1, ...createUserDto });

      const result = await resolver.createUser(createUserDto);

      expect(mockUserService.create).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual({ id: 1, ...createUserDto });
    });
  });
});
