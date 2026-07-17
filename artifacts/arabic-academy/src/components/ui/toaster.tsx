// Placeholder for toaster since it was referenced but might not exist in standard shadcn setup if not fully initialized
// But I will create a basic version to resolve the import in App.tsx
import { Toaster as RadixToaster } from "sonner";

export function Toaster() {
  return <RadixToaster position="top-center" />;
}
