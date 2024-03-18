import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { LoginRepository } from './repository/impl/login.repository';
import { PasswordHashService } from '../../shared/utilities/password-hash.utility';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/create-login.input';
import { ApolloError } from 'apollo-server-express';

const mockLoginRepository = {
  verifyExisteField: jest.fn(),
  findAll: jest.fn(),
};

const mockPasswordHashService = {
  comparePasswords: jest.fn(),
};

const mockJwtService = {
  sign: jest.fn(),
};

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginService,
        { provide: LoginRepository, useValue: mockLoginRepository },
        { provide: PasswordHashService, useValue: mockPasswordHashService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<LoginService>(LoginService);

    mockLoginRepository.verifyExisteField.mockClear();
    mockPasswordHashService.comparePasswords.mockClear();
    mockJwtService.sign.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deve gerar um erro se email ou a senha estiverem incorretos', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'test123',
      };
      mockLoginRepository.verifyExisteField.mockResolvedValue(null);

      await expect(service.create(loginDto)).rejects.toThrow(ApolloError);
    });

    it('deve retornar um token JWT para credenciais válidas', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'test123',
      };
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        password: 'hashedPassword',
      };
      const expectedToken = 'jwtToken';

      mockLoginRepository.verifyExisteField.mockResolvedValue(mockUser);
      mockPasswordHashService.comparePasswords.mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue(expectedToken);

      const result = await service.create(loginDto);

      expect(mockLoginRepository.verifyExisteField).toHaveBeenCalledWith(
        loginDto.email,
      );
      expect(mockPasswordHashService.comparePasswords).toHaveBeenCalledWith(
        loginDto.password,
        mockUser.password,
      );
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: mockUser.id });
      expect(result).toEqual(expectedToken);
    });
  });
});
