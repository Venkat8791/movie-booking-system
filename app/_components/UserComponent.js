"use client";
import { useAuth } from "../_context/AuthProvider";

function UserComponent() {
  const { auth, setAuth } = useAuth();
  return <div>Hello, {auth.userName}</div>;
}

export default UserComponent;
