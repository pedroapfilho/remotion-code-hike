// Prevent Waterfall Chains in API Routes
// ❌ Wrong: This approach has performance issues

export async function GET(request: Request) {
  const session = await auth()
  const config = await fetchConfig()
  const data = await fetchData(session.user.id)
  return Response.json({ data, config })
}