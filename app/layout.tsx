import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">
        <AuthProvider>
          <Navbar />
          <main className="pt-28">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
