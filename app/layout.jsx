import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} max-w-sm mx-auto `}>{children}</body>
    </html>
  );
}
