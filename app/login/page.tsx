import LoginComponent from "../_components/Login/LoginComponent";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login to your account
        </h1>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
