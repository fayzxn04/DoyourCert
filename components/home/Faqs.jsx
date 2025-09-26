"use client";
import { useState } from "react";
import { IconChevronDown, IconPlus } from "@tabler/icons-react";

const faqData = [
  {
    question: "Do I need prior experience to enroll in DoYourCert courses?",
    answer:
      "No prior experience is required for most beginner-level courses such as Microsoft Excel Associate, PowerPoint Associate, or Tally Essentials Level 1. These programs are designed to build your knowledge step by step, starting with the basics. However, for advanced certifications like Excel Expert or Tally Prime Professional, having a foundation in the respective subject can make the learning process easier and more effective.",
  },
  {
    question:
      "What is the difference between an Associate and an Expert certification?",
    answer:
      "Associate certifications focus on foundational skills, while Expert certifications validate advanced and specialized expertise in a subject area.",
  },
  {
    question: "How are DoYourCert Technology courses delivered?",
    answer:
      "Our courses are delivered online through interactive modules, video lectures, and mentor support to ensure a smooth learning experience.",
  },
  {
    question: "Will I get a certificate after completing a course?",
    answer:
      "Yes, upon successful completion of your course, you will receive an industry-recognized certification.",
  },
  {
    question:
      "What are the prerequisites for Microsoft Excel Expert certification?",
    answer:
      "You should ideally have completed the Microsoft Excel Associate certification or have equivalent practical experience with Excel.",
  },
  {
    question: "How long does it take to complete a course?",
    answer:
      "Depending on the program, completion time may vary from 10 days to several weeks.",
  },
];

function Faqs() {
  const [open, setOpen] = useState(0); // default: first open

  const toggle = (i) => {
    setOpen((prev) => (prev === i ? -1 : i)); // close if clicked again
  };

  return (
    <section className="mx-6 md:mx-10">
      {/* Header */}
      <div className="max-w-[717px] mx-auto text-center">
        <p className="uppercase text-[16px] text-[#272088] font-light">
          Frequently asked questions
        </p>

        <h2 className="text-[32px] md:text-[54px] text-[#272088] font-normal mb-8 leading-tight">
          Everything you need to Know About DoYourCert
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="border border-[#D8D9D9] rounded-lg mb-4 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-4 py-5 text-left text-[20px] ${
                  isOpen ? "bg-[#F0EFFF]" : "bg-white"
                }`}
              >
                <span
                  className={`text-[18px] md:text-[20px] font-medium ${
                    isOpen ? "text-[#272088]" : "text-gray-700"
                  }`}
                >
                  {item.question}
                </span>
                <IconPlus
                  className={`w-6 h-6 transform transition-transform duration-300 cursor-pointer ${
                    isOpen ? "rotate-135 text-[#272088]" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 pb-5 text-gray-600 text-[15px] leading-6 bg-[#F0EFFF] ">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;
