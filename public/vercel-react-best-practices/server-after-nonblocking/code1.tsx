// Use after() for Non-Blocking Operations
// ❌ Wrong: This approach has performance issues

import { logUserAction } from "@/app/utils";

export async function POST(request: Request) {
  // Perform mutation
  await updateDatabase(request);

  // Logging blocks the response
  const userAgent = request.headers.get("user-agent") || "unknown";
  await logUserAction({ userAgent });

  return new Response(JSON.stringify({ status: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
