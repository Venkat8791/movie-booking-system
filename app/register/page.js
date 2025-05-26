import React from "react";
import RegistrationComponent from "../_components/Login/RegistrationComponent";

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h1>
    
        <RegistrationComponent />
      </div>
    </div>
  );
}

export default page;
