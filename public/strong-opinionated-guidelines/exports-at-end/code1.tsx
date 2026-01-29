// ❌ NEVER: Inline exports scatter the API surface
export const Button = () => <button>Click</button>;

export type ButtonProps = { label: string };

export const useButton = () => useState(false);
