import { User } from "lucide-react";

export default function LoginButton() {
  return (
    <button className="flex items-center gap-2 bg-red-400 w-full px-2 py-1">
      <User />
      <span>Login</span>
    </button>
  );
}
