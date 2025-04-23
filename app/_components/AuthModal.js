import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { toast } from "react-hot-toast";
import React, { Fragment } from "react";
import { sendOtp } from "../_lib/auth-data-service";

function AuthModal({
  isOpen,
  onClose,
  setCurrentModal,
  setMobileNumber,
  mobileNumber,
}) {
  const handleContinue = async () => {
    try {
      const success = await sendOtp(mobileNumber); // your API call

      if (success) {
        setCurrentModal("otp");
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  const isValidPhoneOrEmail = (input) => {
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleContinue();
  };

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
                Sign In / Sign Up
              </DialogTitle>
              <form className="mt-4" onSubmit={handleSubmit}>
                {/* Add your form components here */}
                <input
                  type="text"
                  placeholder="Enter mobile or email"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-[var(--accent)] text-white p-2 rounded hover:bg-[var(--accent-hover)]"
                >
                  Continue
                </button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AuthModal;
