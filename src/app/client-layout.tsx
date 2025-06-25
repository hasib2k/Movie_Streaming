"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex min-h-screen relative">
        {/* Sidebar - Now conditionally visible on mobile */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="flex-1 flex flex-col w-full">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 w-full">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
