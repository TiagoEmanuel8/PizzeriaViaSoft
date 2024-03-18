import { Test, TestingModule } from '@nestjs/testing';
import { LoginResolver } from './login.resolver';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.input';

jest.mock('./login.service', () => {
  return {
    LoginService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAll: jest.fn(),
    })),
  };
});

describe('LoginResolver', () => {
  let resolver: LoginResolver;
  let loginService: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginResolver, LoginService],
    }).compile();

    resolver = module.get<LoginResolver>(LoginResolver);
    loginService = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createLogin', () => {
    it('deve chamar LoginService.create com os parâmetros corretos', async () => {
      const createLoginInput: LoginDto = {
        email: 'test@example.com',
        password: 'password123',
      };
      const expectedToken = 'jwtToken';

      (loginService.create as jest.Mock).mockResolvedValue(expectedToken);

      const result = await resolver.createLogin(createLoginInput);

      expect(loginService.create).toHaveBeenCalledWith(createLoginInput);
      expect(result).toEqual(expectedToken);
    });
  });
});
