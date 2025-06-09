import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organism/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MySosmed",
  description: "My social media app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-700">
      <body className={`${inter.className} hide-scroll-bar`}>
        <div className="w-full sm:max-w-sm mx-auto min-h-dvh bg-slate-200 relative z-[3] mb-14">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
