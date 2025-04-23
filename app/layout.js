import { Toaster } from "react-hot-toast";
import "../app/_styles/globals.css";
import Header from "./_components/Header";
import { AuthProvider } from "./_context/AuthProvider";

export default function RootLayout({ children }) {
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
}
