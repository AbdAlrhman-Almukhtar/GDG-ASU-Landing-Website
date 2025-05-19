import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import chatBubble from "../assets/images/chat_bubble.png";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const answerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    items.forEach((item) => {
      const ref = answerRefs.current[item.id];
      if (ref) {
        ref.style.maxHeight =
          openIndex === item.id ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex, items]);

  const toggleItem = (id: string) => {
    setOpenIndex((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between text-left p-5 md:p-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openIndex === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <h3
                id={`faq-question-${item.id}`}
                className="text-base text-gray-700 pr-4"
              >
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ease-in-out ${
                  openIndex === item.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              ref={(el) => {
                answerRefs.current[item.id] = el;
              }}
              style={{ maxHeight: "0px" }}
            >
              <p className="text-gray-700 leading-relaxed text-sm p-5 md:p-6 pt-0">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQsection: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      id: "faq1",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq2",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq3",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq4",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq5",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq6",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-2/3 md:pr-8 mb-2 md:mb-0">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-700">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            Can not find the answer you are looking for?
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src={chatBubble}
            alt="chat bubble"
            className="h-20 w-24 md:h-24 md:w-30 text-indigo-600"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto mt-12 md:mt-16 lg:mt-10">
        <FAQ items={faqData} />
      </div>
    </section>
  );
};

export default FAQsection;
