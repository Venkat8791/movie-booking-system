import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import React, { Fragment, useState } from "react";
import { verifyOtp } from "../_lib/auth-data-service";
import { useAuth } from "../_context/AuthProvider";

function OTPModal({
  isOpen,
  onClose,
  mobileNumber,
  setCurrentModal,
  setIsModalOpen,
}) {
  const [otp, setOtp] = useState("");
  const { auth, setAuth } = useAuth();

  const handleVerify = async () => {
    try {
      const authResponse = await verifyOtp(mobileNumber, otp); // your API call

      if (authResponse.userId !== null) {
        toast.success("OTP Verified!");

        localStorage.setItem("authToken", authResponse.token);
        setAuth({
          isAuthenticated: true,
          userId: authResponse.userId,
          userName: authResponse.userName || "Guest",
          token: authResponse.token,
          expiry: authResponse.expiry,
        });

        console.log(auth);

        setIsModalOpen(false);
      } else {
        toast.error("Wrong OTP. Please try again.");
      }
    } catch (error) {
      toast.error("oops,Something went wrong!");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerify();
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
              <button
                onClick={() => setCurrentModal("login")}
                className="rounded-full hover:bg-gray-100"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <DialogTitle className="text-lg font-bold">
                <div>
                  <p>Verify your Mobile Number</p>
                  <p className="text-sm font-normal">{` Enter OTP sent to ${mobileNumber}`}</p>
                </div>
              </DialogTitle>
              <form className="mt-4" onSubmit={handleSubmit}>
                {/* Add your form components here */}
                <input
                  type="text"
                  placeholder="OTP"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  className="mt-4 w-full bg-[var(--accent)] text-white p-2 rounded hover:bg-[var(--accent-hover)]"
                  type="submit"
                >
                  Verify
                </button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default OTPModal;
