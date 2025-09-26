// /* eslint-disable @next/next/no-img-element */
// import React from "react";

// export default function Docert() {
//   return (
//     <section className="flex flex-col justify-center items-center my-20">
//       <div className="text-[40px] max-w-[961px] text-center font-regular mt-[21px]">
//         DoYourCert is built on the&nbsp;
//         <span className="text-[#272088] font-regular">
//           belief that world-class certification should be accessible to
//           everyone.
//         </span>{" "}
//         With expert-certified educators and affordable programs,{" "}
//         <span className="text-[#272088] font-regular">
//           {" "}
//           we’ve empowered 10,000+ professionals in fields like Cybersecurity,
//           Project Management, Cloud Computing, Networking,
//         </span>{" "}
//         and more to become the leaders of tomorrow.
//       </div>
//       <button className="mt-8 px-4 py-1 bg-primary text-white rounded-lg flex items-center justify-between space-x-2 font-regular">
//         <span>About Do Your Cert</span>
//         <span>
//           <img
//             src="/right-arrow.png "
//             className="p-[8.79px] bg-[#FFFFFF1E] rounded-[4px] outline-none "
//             alt="arrow"
//           />
//         </span>
//       </button>
//     </section>
//   );
// }

/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Docert() {
  return (
    <section className="flex flex-col justify-center items-center my-10 md:my-16 lg:my-20 px-4">
      <div className="text-center font-regular mt-6 max-w-[961px]">
        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[40px] leading-relaxed">
          DoYourCert is built on the&nbsp;
          <span className="text-[#272088]">
            belief that world-class certification should be accessible to
            everyone.
          </span>{" "}
          With expert-certified educators and affordable programs,{" "}
          <span className="text-[#272088]">
            we’ve empowered 10,000+ professionals in fields like Cybersecurity,
            Project Management, Cloud Computing, Networking,
          </span>{" "}
          and more to become the leaders of tomorrow.
        </p>
      </div>

      {/* Keep button same, only adjust margin for responsiveness */}
      <button className="mt-6 md:mt-8 px-4 py-1 bg-primary text-white rounded-lg flex items-center justify-between space-x-2 font-regular">
        <span>About Do Your Cert</span>
        <span>
          <img
            src="/right-arrow.png"
            className="p-[8.79px] bg-[#FFFFFF1E] rounded-[4px] outline-none"
            alt="arrow"
          />
        </span>
      </button>
    </section>
  );
}
