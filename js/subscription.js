export const PLANS = {
  monthly: {
    price: 14.90,
    name: 'Mensal',
  },
  annual: {
    price: 134.10, // 14.90 * 12 * 0.75 (25% desconto)
    name: 'Anual',
  }
};

export function formatPrice(price) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}