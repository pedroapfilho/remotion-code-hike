// ✅ MUST: Group exports at the end for clear API
const Button = () => <button>Click</button>;

type ButtonProps = { label: string };

const useButton = () => useState(false);

export { Button, useButton };
export type { ButtonProps };
