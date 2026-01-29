// ✅ MUST: Prefer types—more powerful and consistent
type User = {
  id: string;
  name: string;
};

type ApiResponse = {
  data: User[];
  total: number;
};
