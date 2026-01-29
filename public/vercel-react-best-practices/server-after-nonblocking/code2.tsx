// Use after() for Non-Blocking Operations
// ✅ Right: Response sent immediately, logging runs after without blocking user

import { after } from "next/server";
import { headers, cookies } from "next/headers";
import { logUserAction } from "@/app/utils";

export async function POST(request: Request) {
  // Perform mutation
  await updateDatabase(request);

  // Log after response is sent
  after(async () => {
    const userAgent = (await headers()).get("user-agent") || "unknown";
    const sessionCookie =
      (await cookies()).get("session-id")?.value || "anonymous";

    logUserAction({ sessionCookie, userAgent });
  });

  return new Response(JSON.stringify({ status: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
