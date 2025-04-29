"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";

function RegistrationFormModal({ isOpen, onClose, onLoginClick }) {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
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
      onLoginClick();
    }
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
                Create your account
              </DialogTitle>
              <p>
                Have an account?{" "}
                <button
                  className="inline text-[var(--accent)]"
                  onClick={onLoginClick}
                >
                  Login now
                </button>
              </p>

              <form className="mt-4" onSubmit={handleSignup}>
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
                <div>
                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                </div>
                <div className="mb-1">
                  <label className="block">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    placeholder="Enter first name"
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <label className="block">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    placeholder="Enter last name"
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default RegistrationFormModal;
