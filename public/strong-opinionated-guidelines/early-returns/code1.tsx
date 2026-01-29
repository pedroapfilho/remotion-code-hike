// ❌ NEVER: Nested conditionals overload working memory
const processOrder = (order: Order) => {
  if (order) {
    if (order.items.length > 0) {
      if (order.payment) {
        if (order.payment.verified) {
          return submitOrder(order);
        }
      }
    }
  }
  return null;
};
