// Authenticate Server Actions Like API Routes
// ✅ Right: Authentication inside the action

"use server";

import { verifySession } from "@/lib/auth";
import { unauthorized } from "@/lib/errors";

export async function deleteUser(userId: string) {
  // Always check auth inside the action
  const session = await verifySession();

  if (!session) {
    throw unauthorized("Must be logged in");
  }

  // Check authorization too
  if (session.user.role !== "admin" && session.user.id !== userId) {
    throw unauthorized("Cannot delete other users");
  }

  await db.user.delete({ where: { id: userId } });
  return { success: true };
}
