'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Pixloris?',
    answer: 'Pixloris is a beautiful movie streaming UI built with Next.js.'
  },
  {
    question: 'Is Pixloris really free?',
    answer: 'Yes, Pixloris is a demo project and is completely free to use.'
  },
  {
    question: 'Where is Pixloris available?',
    answer: 'Pixloris is available worldwide as a demo.'
  },
  {
    question: 'How can I personalize my Pixloris experience?',
    answer: 'You can filter movies by category and explore trending content.'
  },
  {
    question: 'Can I use Pixloris to enjoy my own personal media?',
    answer: 'This is a demo UI and does not support personal media uploads.'
  },
];

export default function FAQ() {
  // Always start with all closed for SSR/CSR match
  const [open, setOpen] = useState<number | null>(null);
    return (
    <section className="max-w-3xl mx-auto my-12 xs:my-16 sm:my-20 md:my-24 px-3 xs:px-4 sm:px-5 md:px-6 flex flex-col items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#181e23]/50 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute -top-10 -right-40 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-40 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-6 xs:mb-8 sm:mb-10 text-[#f9f8ff] text-center relative">
        <span className="relative z-10">Frequently Asked Questions</span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></span>
      </h2><div className="space-y-3 xs:space-y-4 sm:space-y-5 w-full">
        {faqs.map((faq, idx) => (
          <div 
            key={faq.question} 
            className={`bg-gradient-to-br ${open === idx ? 'from-[#1e262c] to-[#181e23]' : 'from-[#181e23] to-[#181e23]'} 
                      rounded-xl shadow-lg border border-[#232a31] transition-all duration-300 hover:shadow-xl 
                      ${open === idx ? 'shadow-yellow-400/5' : ''}`}
          >
            <button
              className="w-full flex justify-between items-center px-4 xs:px-5 sm:px-6 md:px-7 py-4 xs:py-4.5 sm:py-5 
                        text-left text-[#f9f8ff] font-medium xs:font-semibold text-sm xs:text-base focus:outline-none 
                        transition-colors duration-300 focus:ring-2 focus:ring-yellow-400/30 rounded-xl"
              onClick={() => setOpen(open === idx ? null : idx)}
              type="button"
            >
              <span className="flex-1 pr-3">{faq.question}</span>
              <span className={`text-xl transition-transform duration-300 ${open === idx ? 'text-yellow-400 rotate-180' : 'text-[#959ca3]'}`}>
                {open === idx ? '−' : '+'}
              </span>
            </button>            {open === idx && (
              <div className="px-4 xs:px-5 sm:px-6 md:px-7 pb-4 xs:pb-5 text-[#b4bbc2] text-xs xs:text-sm overflow-hidden transition-all duration-300 max-h-40 opacity-100 animate-fadeIn">
                <div className="border-t border-[#232a31] pt-3 mt-1">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}