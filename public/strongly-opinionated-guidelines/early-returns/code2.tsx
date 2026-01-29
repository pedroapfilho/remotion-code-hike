// ✅ MUST: Early returns reduce cognitive load
const processOrder = (order: Order) => {
  if (!order) return null;
  if (order.items.length === 0) return null;
  if (!order.payment?.verified) return null;

  return submitOrder(order);
};
