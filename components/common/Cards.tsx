import React from "react";

export default function Cards() {
  const data = [
    { value: "100+", label: "Number of Vendors" },
    { value: "200+", label: "Number of Exams" },
    { value: "250+", label: "Number of Certifications" },
    {
      value: "2000+",
      label: "IT Professionals Certified Successfully",
    },
  ];

  return (
    <section className="bg-light py-6 px-6 md:px-12 lg:px-[72px] mx-5 rounded-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-center relative">
        {data.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center p-6">
            <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-regular text-gray-600">
              {item.value}
            </h2>
            <p className="text-gray-600 mt-2 text-[16px] md:text-[18px]">
              {item.label}
            </p>

            {/* Desktop vertical divider */}
            {index !== data.length - 1 && (
              <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[80px] bg-[#D8D9D9]" />
            )}

            {/* Mobile vertical divider */}
            {index % 2 === 0 && index !== data.length - 1 && (
              <span className="block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[80px] bg-[#D8D9D9]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
