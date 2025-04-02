import { User } from "lucide-react";

export default function LoginButton() {
  return (
    <button className="flex items-center gap-2">
      <User />
      <span>Login</span>
    </button>
  );
}
