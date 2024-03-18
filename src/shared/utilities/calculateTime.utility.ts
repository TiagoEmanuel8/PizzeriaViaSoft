import { CreateOrderItemDto } from '../../modules/orders/dto/create-order-item.dto';

export function calculateItemPreparationTime(item: CreateOrderItemDto): number {
  let time = 0;

  switch (item.size) {
    case 'pequena':
      time += 15;
      break;
    case 'média':
      time += 20;
      break;
    case 'grande':
      time += 25;
      break;
  }

  if (item.flavor === 'portuguesa') {
    time += 5;
  }

  if (item.customizations.includes('borda recheada')) {
    time += 5;
  }

  return time * item.quantity;
}
