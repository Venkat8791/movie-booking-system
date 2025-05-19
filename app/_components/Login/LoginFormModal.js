"use client";
import { useAuth } from "@/app/_context/AuthProvider";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment, lazy, useState } from "react";
import toast from "react-hot-toast";

function LoginFormModal({ isOpen, onClose, onSignupClick }) {
  const { setAuth } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/mxmovies/v1/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include", // to receive HttpOnly cookie
    });
    if (!res.ok) {
      const error = await res.json();
      setErrorMessage(error.message);
      toast.error("Login failed. Please check your credentials");
      return;
    }
    const userData = await res.json();
    console.log(userData);
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

    onClose();
  };

  if (!isOpen) return null;
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  backdrop-blur-xs" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              <DialogTitle className="text-lg font-bold">
                Login to you account
              </DialogTitle>
              <p>
                Don&apos;t have an account?
                <button
                  className="ml-1 inline text-[var(--accent)]"
                  onClick={onSignupClick}
                >
                  Signup now
                </button>
              </p>

              <form className="mt-4" onSubmit={handleLogin}>
                <div className="mb-1">
                  <label className="block">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    placeholder="Enter email"
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-1">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    onChange={handleChange}
                  />
                </div>
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginFormModal;
