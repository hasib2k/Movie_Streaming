"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
  breadcrumb?: string;
}

export default function PageTemplate({ title, children, breadcrumb }: PageTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 xs:py-10 sm:py-12 px-4 sm:px-6">
      <div className="mb-6 sm:mb-8">
        <Link 
          href="/"
          className="flex items-center gap-1 text-sm xs:text-base text-[#959ca3] hover:text-[#f9f8ff] mb-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        {breadcrumb && (
          <div className="text-xs xs:text-sm text-[#959ca3] mb-2">
            <Link href="/" className="hover:text-[#f9f8ff]">Home</Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </div>
        )}
        
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#f9f8ff]">
          {title}
        </h1>
      </div>
      
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}
