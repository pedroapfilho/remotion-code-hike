// Authenticate Server Actions Like API Routes
// ❌ Wrong: This approach has performance issues

'use server'

export async function deleteUser(userId: string) {
  // Anyone can call this! No auth check
  await db.user.delete({ where: { id: userId } })
  return { success: true }
}