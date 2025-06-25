'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Servia?',
    answer: 'Servia is a beautiful movie streaming UI built with Next.js.'
  },
  {
    question: 'Is Servia really free?',
    answer: 'Yes, Servia is a demo project and is completely free to use.'
  },
  {
    question: 'Where is Servia available?',
    answer: 'Servia is available worldwide as a demo.'
  },
  {
    question: 'How can I personalize my Servia experience?',
    answer: 'You can filter movies by category and explore trending content.'
  },
  {
    question: 'Can I use Servia to enjoy my own personal media?',
    answer: 'This is a demo UI and does not support personal media uploads.'
  },
];

export default function FAQ() {
  // Always start with all closed for SSR/CSR match
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-2xl mx-auto my-16" >
      <h2 className="text-2xl font-bold mb-6 text-[#f9f8ff] text-center">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="bg-[#181e23] rounded-lg">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-[#f9f8ff] font-semibold focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              type="button"
            >
              <span>{faq.question}</span>
              <span className="text-[#959ca3]">{open === idx ? '-' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-6 pb-4 text-[#959ca3] text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 