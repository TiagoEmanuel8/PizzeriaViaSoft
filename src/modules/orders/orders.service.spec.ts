import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { OrderRepository } from './repository/impl/order.repository';
import { CreateOrderDto } from './dto/create-order.dto';

const mockOrderRepository = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
};

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: OrderRepository,
          useValue: mockOrderRepository,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    mockOrderRepository.create.mockClear();
    mockOrderRepository.findAll.mockClear();
    mockOrderRepository.findOne.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deve criar um pedido com sucesso', async () => {
      mockOrderRepository.create.mockResolvedValue('someOrderEntity');

      const createOrderDto: CreateOrderDto = {
        items: [],
      };
      const userId = 1;

      expect(await service.create(createOrderDto, userId)).toEqual(
        'someOrderEntity',
      );
      expect(mockOrderRepository.create).toHaveBeenCalledWith({
        ...createOrderDto,
        userId,
        amount: expect.any(Number),
        time: expect.any(Number),
        items: {
          create: expect.anything(),
        },
      });
    });
  });

  describe('findAll', () => {
    it('deve retornar um array de pedidos', async () => {
      mockOrderRepository.findAll.mockResolvedValue(['order1', 'order2']);

      const userId = 1;
      expect(await service.findAll(userId)).toEqual(['order1', 'order2']);
      expect(mockOrderRepository.findAll).toHaveBeenCalledWith(userId);
    });
  });

  describe('findOne', () => {
    it('deve retornar um pedido', async () => {
      mockOrderRepository.findOne.mockResolvedValue('order1');

      const orderId = 1;
      const userId = 1;
      expect(await service.findOne(orderId, userId)).toEqual('order1');
      expect(mockOrderRepository.findOne).toHaveBeenCalledWith(orderId, userId);
    });
  });
});
