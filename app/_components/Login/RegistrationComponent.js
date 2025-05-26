"use client";
import React, { useEffect, useState } from "react";
import FormInput from "../UI/FormInput";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/app/_context/AuthProvider";
import Spinner from "../Spinner";

function RegistrationComponent() {
  const { auth, loading } = useAuth();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/mxmovies/v1/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const error = await res.json();
      setErrorMessage(error.message);
    } else {
      toast.success("Registration successful. Please login");
      setErrorMessage(null);
      router.push("/login");
    }
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
        Have an account?{" "}
        <button
          className="inline text-[var(--accent)]"
          onClick={() => router.push("/login")}
        >
          Login now
        </button>
      </p>
      <form className="mt-4" onSubmit={handleRegistration}>
        <FormInput
          id="email"
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
        />
        <div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
        <FormInput
          id="firstName"
          name="firstName"
          label="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <FormInput
          id="lastName"
          name="lastName"
          label="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <FormInput
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onChange={handleChange}
        />

        <p className="text-sm font-normal mt-1">
          By continuing, you agree to our{" "}
          <span className="text-[var(--accent)]">Terms of Use</span> and{" "}
          <span className="text-[var(--accent)]">Privacy Policy</span>.
        </p>
        <button
          type="submit"
          className="mt-4 w-full bg-[var(--accent)] text-white p-2 rounded hover:bg-[var(--accent-hover)]"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}

export default RegistrationComponent;
