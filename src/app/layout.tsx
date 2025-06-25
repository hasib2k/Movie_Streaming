import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import ClientLayoutWrapper from "./client-layout";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Pixloris - Movie Streaming App",
  description: "A beautiful movie streaming UI built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
