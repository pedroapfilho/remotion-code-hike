// Build Index Maps for Repeated Lookups
// ❌ Wrong: This approach has performance issues

function processOrders(orders: Order[], users: User[]) {
  return orders.map(order => ({
    ...order,
    user: users.find(u => u.id === order.userId)
  }))
}