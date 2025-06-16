import { Toaster } from "react-hot-toast";
import "../app/_styles/globals.css";
import Header from "./_components/Header/Header";
import { AuthProvider } from "./_context/AuthProvider";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" reverseOrder={false} />
        <AuthProvider>
          <Header />
          <div className="max-w-7xl mx-auto">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
