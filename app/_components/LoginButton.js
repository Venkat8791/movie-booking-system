import { User } from "lucide-react";

export default function LoginButton() {
  return (
    <button className="flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] w-full px-2 py-1 rounded-sm">
      <User />
      <span>Login</span>
    </button>
  );
}
