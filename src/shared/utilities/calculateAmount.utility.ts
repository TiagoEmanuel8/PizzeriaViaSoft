import { CreateOrderItemDto } from '../../modules/orders/dto/create-order-item.dto';

export function calculateItemAmount(item: CreateOrderItemDto): number {
  let amount = 0;

  switch (item.size) {
    case 'pequena':
      amount += 20.2;
      break;
    case 'média':
      amount += 30.03;
      break;
    case 'grande':
      amount += 40;
      break;
    default:
      throw new Error(`Tamanho inválido: ${item.size}`);
  }

  if (item.customizations) {
    item.customizations.forEach((customization) => {
      if (customization === 'extra bacon') {
        amount += 3;
      } else if (customization === 'borda recheada') {
        amount += 5;
      }
    });
  }

  return amount * item.quantity;
}
