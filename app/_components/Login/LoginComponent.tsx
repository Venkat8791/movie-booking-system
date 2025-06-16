"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../_context/AuthProvider";
import FormInput from "../UI/FormInput";
import toast from "react-hot-toast";
import Spinner from "../Spinner";

function LoginComponent() {
  const { auth, setAuth, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/mxmovies/v1/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include", // to receive HttpOnly cookie
    });
    if (!res.ok) {
      const error = await res.json();
      setErrorMessage(error.message);
      toast.error("Login failed. Please check your credentials");
      return;
    }
    const userData = await res.json();
    toast.success("Login successful");
    setAuth({
      userId: userData.userId,
      isAuthenticated: true,
      firstName: userData.firstName,
      email: userData.email,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
    });
    setErrorMessage(null);
    router.push(redirect);
  };

  useEffect(() => {
    if (!loading && auth.isAuthenticated) {
      router.replace(redirect); // avoid adding login to browser history
    }
  }, [auth.isAuthenticated, loading, router, redirect]);

  if (loading) return <Spinner />;

  return (
    <div>
      <p>
        Don&apos;t have an account?{" "}
        <button
          className="ml-1 inline text-[var(--accent)]"
          onClick={() => router.push("/register")}
        >
          Signup now
        </button>
      </p>
      <form className="mt-4" onSubmit={handleLogin}>
        <FormInput
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onChange={handleChange}
        />

        <div>
          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-[var(--accent)] text-white p-2 rounded hover:bg-[var(--accent-hover)]"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
