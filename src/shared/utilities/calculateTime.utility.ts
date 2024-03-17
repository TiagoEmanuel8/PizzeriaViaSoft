import { CreateOrderItemDto } from '../../modules/orders/dto/create-order-item.dto';

export function calculateItemPreparationTime(item: CreateOrderItemDto): number {
  let time = 0;

  // Aplica as regras baseadas no tamanho
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

  // Verifica o sabor para adicionar tempo extra
  if (item.flavor === 'portuguesa') {
    time += 5;
  }

  // Verifica as customizações para adicionar tempo extra
  if (item.customizations.includes('borda recheada')) {
    time += 5;
  }

  // O tempo total para o item é multiplicado pela quantidade
  return time * item.quantity;
}
