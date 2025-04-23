"use client";
import { User } from "lucide-react";
import { useState } from "react";
import AuthModal from "./AuthModal";
import OTPModal from "./OTPModal";

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  return (
    <>
      <button
        className="flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] w-full px-2 py-1 rounded-sm"
        onClick={() => {
          setIsModalOpen(true);
          setCurrentModal("login");
        }}
      >
        <User />
        <span>Login</span>
      </button>
      {currentModal == "login" && (
        <AuthModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setCurrentModal={setCurrentModal}
          setMobileNumber={setMobileNumber}
          mobileNumber={mobileNumber}
        />
      )}
      {currentModal == "otp" && (
        <OTPModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setCurrentModal={setCurrentModal}
          mobileNumber={mobileNumber}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
