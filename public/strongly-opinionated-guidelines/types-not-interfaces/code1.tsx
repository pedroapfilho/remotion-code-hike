// ❌ NEVER: Interfaces are less flexible
interface User {
  id: string;
  name: string;
}

interface ApiResponse {
  data: User[];
  total: number;
}
