import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#272088]  mx-5 px-16 py-16 rounded-2xl ">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-[18px] font-light text-white/70 uppercase tracking-wide">
          Why Choose Us
        </p>
        <h2 className="text-[54px] font-regular text-white mt-2 leading-snug">
          Why Professionals Around the <br /> World Choose DoYourCert
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-x-[32px]">
        <div className=" bg-white rounded-2xl w-[298px]">
          <div className="p-[26px] font-regular">
            <p className="text-[28px] flex flex-col justify-between font-regular">
              Top IT <br /> Certifications
            </p>
            <p className="text-[16px]">
              Access 200+ globally recognized certifications across leading
              technology domains.
            </p>
          </div>
          <div>
            <img src="/y-1.png" />
          </div>
        </div>

        <div className=" bg-white rounded-2xl w-[298px]">
          <div className="p-[26px] font-regular">
            <p className="text-[28px] flex flex-col justify-between font-regular">
              Guaranteed Success
            </p>
            <p className="text-[16px]">
              Achieve certification with our proven high success rate and expert
              support
            </p>
          </div>
          <div>
            <img src="/y-2.png" className="self-end " />
          </div>
        </div>

        <div className=" bg-white rounded-2xl w-[298px]">
          <div className="p-[26px] font-regular flex flex-col justify-between ">
            <p className="text-[28px] flex flex-col justify-between font-regular">
              Expert Guidance
            </p>
            <p className="text-[16px]">
              Get step-by-step assistance from certified mentors throughout your
              journey.
            </p>
          </div>
          <div>
            <img src="/y-3.png" className="mt-11" />
          </div>
        </div>

        <div className=" bg-white rounded-2xl w-[298px]">
          <div className="p-[26px] font-regular">
            <p className="text-[28px] flex flex-col justify-between font-regular">
              Fast-Track Certification
            </p>
            <p className="text-[16px]">
              Earn industry-recognized credentials in as little as 10 days.
            </p>
          </div>
          <div>
            <img src="/y-4.png" className="mt-6.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
// import React from "react";

// export default function WhyChooseUs() {
//   const cards = [
//     {
//       title: "Top IT Certifications",
//       desc: "Access 200+ globally recognized certifications across leading technology domains.",
//       img: "/y-1.png",
//     },
//     {
//       title: "Guaranteed Success",
//       desc: "Achieve certification with our proven high success rate and expert support.",
//       img: "/y-2.png",
//     },
//     {
//       title: "Expert Guidance",
//       desc: "Get step-by-step assistance from certified mentors throughout your journey.",
//       img: "/y-3.png",
//     },
//     {
//       title: "Fast-Track Certification",
//       desc: "Earn industry-recognized credentials in as little as 10 days.",
//       img: "/y-4.png",
//     },
//   ];

//   return (
//     <section className="bg-[#272088] mx-3 sm:mx-5 px-6 sm:px-10 md:px-16 py-10 sm:py-14 md:py-16 rounded-2xl">
//       {/* Section Header */}
//       <div className="mb-8 sm:mb-10">
//         <p className="text-[14px] sm:text-[16px] md:text-[18px] font-light text-white/70 uppercase tracking-wide">
//           Why Choose Us
//         </p>
//         <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[54px] font-regular text-white mt-2 leading-snug">
//           Why Professionals Around the <br className="hidden md:block" /> World
//           Choose DoYourCert
//         </h2>
//       </div>

//       {/* Cards Wrapper */}
//       <div
//         className="
//           flex gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6
//         "
//       >
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className="
//               bg-white rounded-2xl flex-shrink-0 w-full
//               transition-transform hover:scale-[1.02]
//             "
//           >
//             <div className="p-6 font-regular flex flex-col justify-between h-full">
//               <p className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-regular mb-3">
//                 {card.title}
//               </p>
//               <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-700">
//                 {card.desc}
//               </p>
//               <div className="mt-6 flex justify-end">
//                 <img src={card.img} alt={card.title} className="max-h-[80px]" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
