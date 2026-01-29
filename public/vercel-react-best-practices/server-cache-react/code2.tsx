// Per-Request Deduplication with React.cache()
// ✅ Right: Use primitives as cache keys, objects create new references and miss cache

const getUser = cache(async (params: { uid: number }) => {
  return await db.user.findUnique({ where: { id: params.uid } });
});

// Each call creates new object, never hits cache
getUser({ uid: 1 });
getUser({ uid: 1 }); // Cache miss, runs query again
