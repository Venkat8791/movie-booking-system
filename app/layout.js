import "../app/_styles/globals.css";
import Header from "./_components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
