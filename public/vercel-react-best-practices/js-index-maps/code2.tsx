// Build Index Maps for Repeated Lookups
// ✅ Right: O(1) Map lookup instead of O(n) array.find() per item

function processOrders(orders: Order[], users: User[]) {
  const userById = new Map(users.map((u) => [u.id, u]));

  return orders.map((order) => ({
    ...order,
    user: userById.get(order.userId),
  }));
}
