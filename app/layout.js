import { AuthProvider } from "./Providers";
import { Inter } from "next/font/google";
import './global.css';


import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

