import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import AuthProvider from "@/components/providers/AuthProvider";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          <main className="w-full">
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
