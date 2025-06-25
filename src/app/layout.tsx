import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import Sidebar from "../components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servia - Movie Streaming App",
  description: "A beautiful movie streaming UI built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
