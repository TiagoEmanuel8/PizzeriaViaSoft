import { Test, TestingModule } from '@nestjs/testing';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

const mockOrdersService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
};

const mockUser = { id: 1 };

describe('OrdersResolver', () => {
  let resolver: OrdersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersResolver,
        { provide: OrdersService, useValue: mockOrdersService },
      ],
    }).compile();

    resolver = module.get<OrdersResolver>(OrdersResolver);

    mockOrdersService.create.mockClear();
    mockOrdersService.findAll.mockClear();
    mockOrdersService.findOne.mockClear();
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createOrder', () => {
    it('deve criar e retornar um pedido', async () => {
      const createOrderDto: CreateOrderDto = {
        items: [],
      };
      const mockContext = { req: { user: mockUser } };
      mockOrdersService.create.mockResolvedValue('mockOrder');

      await expect(
        resolver.createOrder(createOrderDto, mockContext),
      ).resolves.toEqual('mockOrder');
      expect(mockOrdersService.create).toHaveBeenCalledWith(
        createOrderDto,
        mockUser.id,
      );
    });
  });

  describe('findAll', () => {
    it('deve retornar um array de pedidos', async () => {
      const mockContext = { req: { user: mockUser } };
      mockOrdersService.findAll.mockResolvedValue(['order1', 'order2']);

      await expect(resolver.findAll(mockContext)).resolves.toEqual([
        'order1',
        'order2',
      ]);
      expect(mockOrdersService.findAll).toHaveBeenCalledWith(mockUser.id);
    });
  });

  describe('findOne', () => {
    it('deve retornar um pedido', async () => {
      const orderId = 1;
      const mockContext = { req: { user: mockUser } };
      mockOrdersService.findOne.mockResolvedValue('order1');

      await expect(resolver.findOne(orderId, mockContext)).resolves.toEqual(
        'order1',
      );
      expect(mockOrdersService.findOne).toHaveBeenCalledWith(
        orderId,
        mockUser.id,
      );
    });
  });
});
