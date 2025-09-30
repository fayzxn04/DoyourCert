/* eslint-disable @next/next/no-img-element */
import {
  IconDeviceDesktop,
  IconGraph,
  IconHeartHandshake,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import Button from "../common/Button";

export default function Popular() {
  return (
    <>
      <main className="relative">
        <img
          src="student-2.png"
          className="w-[650px] h-[650px] mx-auto"
          alt="image"
        />

        <div className="flex gap-2 absolute top-40 left-80 items-center  ">
          <p className="text-[18px]">
            Responsive & <br /> Supportive Team
          </p>
          <div className="p-4 rounded-4xl bg-primary text-white">
            <IconUsers />
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-2 absolute top-40 right-64 items-center">
          <div className="p-4 rounded-4xl bg-primary text-white">
            <IconDeviceDesktop />
          </div>
          <p className="text-[18px]">
            End-to-End IT Technical <br /> Management
          </p>
        </div>
        {/* 3rd */}

        <div className="flex gap-2 absolute top-120 left-84 items-center">
          <p className="text-[18px]">
            Tailored Digital <br />
            Growth Solutions
          </p>
          <div className="p-4 rounded-4xl bg-primary text-white">
            <IconGraph />
          </div>
        </div>
        {/* 4 */}
        <div className="flex gap-2 absolute top-120 right-78 items-center">
          <div className="p-4 rounded-4xl bg-primary text-white">
            <IconHeartHandshake />
          </div>
          <p className="text-[18px]">
            Strategic Technology <br />
            Partnership
          </p>
        </div>
      </main>

      <section className="mx-10 mb-12 -mt-10 ">
        <div className="rounded-2xl bg-primary p-6">
          <p className="uppercase font-regular text-white px-4 py-2 w-fit cursor-pointer">
            Popular Certification courses
          </p>

          <div className="mt-4 flex justify-between">
            <h1 className="text-[54px] font-regular capitalize  text-white leading-[1.05] px-4">
              Trending Courses for you
            </h1>

            <Button />
          </div>

          <div className="flex justify-around mt-[40px]">
            <div className="bg-white w-[312px] h-[140px] items-center flex justify-center rounded-2xl">
              <img
                src="image 30.png"
                className="w-[162px] h-[101px]"
                alt="courses"
              />
            </div>
            <div className="bg-white w-[312px] h-[140px] items-center flex justify-center rounded-2xl">
              <img
                src="image 31.png"
                className="w-[101px] h-[100px]"
                alt="courses"
              />
            </div>
            <div className="bg-white w-[312px] h-[140px] items-center flex justify-center rounded-2xl">
              <img
                src="image 32.png"
                className="w-[89px] h-[100px]"
                alt="courses"
              />
            </div>
            <div className="bg-white w-[312px] h-[140px] items-center flex justify-center rounded-2xl">
              <img
                src="image 33.png"
                className="w-[100px] h-[100px]"
                alt="courses"
              />
            </div>
          </div>
          <div className="text-white flex justify-around mt-2">
            <p className="w-[312px] h-[46px]">
              PMI Project Management - Ready Courseware
            </p>
            <p className="w-[312px] h-[46px]">
              Meta Front End Developer Professional Certificate Course{" "}
            </p>
            <p className="w-[312px] h-[46px]">
              IBM Software Foundation C++ Certification Course
            </p>
            <p className="w-[312px] h-[46px]">
              Meta Front End Developer Professional Certificate Course{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
// import {
//   IconDeviceDesktop,
//   IconGraph,
//   IconHeartHandshake,
//   IconUsers,
// } from "@tabler/icons-react";
// import React from "react";

// export default function Popular() {
//   return (
//     <>
//       {/* Hero-like section */}
//       <main className="relative">
//         <img
//           src="student-2.png"
//           className="w-[650px] h-[650px] mx-auto"
//           alt="student"
//         />

//         {/* 1 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-40 left-8 sm:left-80 items-center text-center sm:text-left">
//           <p className="text-[16px] sm:text-[18px]">
//             Responsive & <br /> Supportive Team
//           </p>
//           <div className="p-4 rounded-4xl bg-primary text-white">
//             <IconUsers />
//           </div>
//         </div>

//         {/* 2 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-40 right-8 sm:right-64 items-center text-center sm:text-left">
//           <div className="p-4 rounded-4xl bg-primary text-white">
//             <IconDeviceDesktop />
//           </div>
//           <p className="text-[16px] sm:text-[18px]">
//             End-to-End IT Technical <br /> Management
//           </p>
//         </div>

//         {/* 3 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-[480px] left-8 sm:left-84 items-center text-center sm:text-left">
//           <p className="text-[16px] sm:text-[18px]">
//             Tailored Digital <br /> Growth Solutions
//           </p>
//           <div className="p-4 rounded-4xl bg-primary text-white">
//             <IconGraph />
//           </div>
//         </div>

//         {/* 4 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-[480px] right-8 sm:right-78 items-center text-center sm:text-left">
//           <div className="p-4 rounded-4xl bg-primary text-white">
//             <IconHeartHandshake />
//           </div>
//           <p className="text-[16px] sm:text-[18px]">
//             Strategic Technology <br /> Partnership
//           </p>
//         </div>
//       </main>

//       {/* Popular courses */}
//       <section className="mx-4 sm:mx-10 mb-12 -mt-10">
//         <div className="rounded-2xl bg-primary p-6">
//           <p className="uppercase font-regular text-white px-4 py-2 w-fit cursor-pointer">
//             Popular Certification Courses
//           </p>

//           {/* Heading + Button */}
//           <div className="mt-4 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
//             <h1 className="text-[32px] sm:text-[42px] lg:text-[54px] font-regular capitalize text-white leading-[1.2] px-4">
//               Trending Courses for You
//             </h1>

//             <button className="px-6 py-3 bg-[rgba(255,255,255,0.08)] text-white rounded-lg backdrop-blur-[81.6px] flex items-center space-x-2 font-normal border border-[rgba(255,255,255,0.20)] self-start lg:self-center">
//               <span className="text-[16px] sm:text-[18px]">
//                 Explore Popular Courses
//               </span>
//               <span>
//                 {/* Arrow Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="flex w-[32px] h-[32px] p-[8.8px] justify-center items-center rounded bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),rgba(255,255,255,0.12)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//                 >
//                   <path
//                     d="M8.36823 13.866C8.22512 13.866 8.09854 13.8325 7.98846 13.7653C7.87838 13.6982 7.79857 13.6053 7.74904 13.4865C7.69952 13.3677 7.68851 13.2463 7.71603 13.1224C7.74354 12.9985 7.80134 12.8953 7.88939 12.8127L13.008 7.99525L7.88939 3.19333C7.82335 3.13136 7.77381 3.06165 7.74079 2.98421C7.70777 2.90676 7.69126 2.82672 7.69126 2.74412C7.69126 2.6615 7.70777 2.58405 7.74079 2.51176C7.77381 2.43948 7.82335 2.37235 7.88939 2.31039C7.95544 2.24843 8.02975 2.20195 8.1123 2.17098C8.19485 2.14 8.27191 2.12451 8.34346 2.12451C8.41501 2.12451 8.50582 2.14517 8.6159 2.18646C8.69296 2.21744 8.7645 2.26392 8.83055 2.32588L14.4114 7.56153C14.5435 7.68545 14.6096 7.8326 14.6096 8.003C14.6096 8.17339 14.5435 8.32055 14.4114 8.44446L8.83055 13.6801C8.69846 13.804 8.54435 13.866 8.36823 13.866Z"
//                     fill="white"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* Cards row - scrollable on mobile */}
//           <div className="mt-[40px] flex gap-4 overflow-x-auto scrollbar-hide">
//             {[
//               {
//                 src: "image 30.png",
//                 text: "PMI Project Management - Ready Courseware",
//               },
//               {
//                 src: "image 31.png",
//                 text: "Meta Front End Developer Professional Certificate Course",
//               },
//               {
//                 src: "image 32.png",
//                 text: "IBM Software Foundation C++ Certification Course",
//               },
//               {
//                 src: "image 33.png",
//                 text: "Meta Front End Developer Professional Certificate Course",
//               },
//             ].map((item, i) => (
//               <div key={i} className="flex-shrink-0">
//                 <div className="bg-white w-[280px] sm:w-[312px] h-[140px] flex items-center justify-center rounded-2xl">
//                   <img
//                     src={item.src}
//                     alt="course"
//                     className="max-h-[100px] object-contain"
//                   />
//                 </div>
//                 <p className="text-white text-sm sm:text-base mt-2 w-[280px] sm:w-[312px]">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

/* eslint-disable @next/next/no-img-element */
// import {
//   IconDeviceDesktop,
//   IconGraph,
//   IconHeartHandshake,
//   IconUsers,
// } from "@tabler/icons-react";
// import React from "react";

// export default function Popular() {
//   return (
//     <>
//       {/* Hero-like section */}
//       <main className="relative">
//         <img
//           src="student-2.png"
//           className="w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] lg:w-[650px] lg:h-[650px] mx-auto"
//           alt="student"
//         />

//         {/* 1 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-20 sm:top-40 left-4 sm:left-80 items-center text-center sm:text-left">
//           <p className="text-[12px] sm:text-[16px] lg:text-[18px]">
//             Responsive & <br /> Supportive Team
//           </p>
//           <div className="p-2 sm:p-3 lg:p-4 rounded-4xl bg-primary text-white">
//             <IconUsers size={20} className="sm:size-5 lg:size-6" />
//           </div>
//         </div>

//         {/* 2 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-20 sm:top-40 right-4 sm:right-64 items-center text-center sm:text-left">
//           <div className="p-2 sm:p-3 lg:p-4 rounded-4xl bg-primary text-white">
//             <IconDeviceDesktop size={20} className="sm:size-5 lg:size-6" />
//           </div>
//           <p className="text-[12px] sm:text-[16px] lg:text-[18px]">
//             End-to-End IT Technical <br /> Management
//           </p>
//         </div>

//         {/* 3 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-[300px] sm:top-[480px] left-4 sm:left-84 items-center text-center sm:text-left">
//           <p className="text-[12px] sm:text-[16px] lg:text-[18px]">
//             Tailored Digital <br /> Growth Solutions
//           </p>
//           <div className="p-2 sm:p-3 lg:p-4 rounded-4xl bg-primary text-white">
//             <IconGraph size={20} className="sm:size-5 lg:size-6" />
//           </div>
//         </div>

//         {/* 4 */}
//         <div className="flex flex-col sm:flex-row gap-2 absolute top-[300px] sm:top-[480px] right-4 sm:right-78 items-center text-center sm:text-left">
//           <div className="p-2 sm:p-3 lg:p-4 rounded-4xl bg-primary text-white">
//             <IconHeartHandshake size={20} className="sm:size-5 lg:size-6" />
//           </div>
//           <p className="text-[12px] sm:text-[16px] lg:text-[18px]">
//             Strategic Technology <br /> Partnership
//           </p>
//         </div>
//       </main>

//       {/* Popular courses */}
//       <section className="mx-2 sm:mx-10 mb-12 -mt-10">
//         <div className="rounded-2xl bg-primary p-4 sm:p-6">
//           <p className="uppercase font-regular text-white px-2 sm:px-4 py-1 sm:py-2 w-fit cursor-pointer text-[10px] sm:text-[14px] lg:text-[16px]">
//             Popular Certification Courses
//           </p>

//           {/* Heading + Button */}
//           <div className="mt-4 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
//             <h1 className="text-[20px] sm:text-[32px] lg:text-[54px] font-regular capitalize text-white leading-[1.2] px-2 sm:px-4">
//               Trending Courses for You
//             </h1>

//             {/* <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[rgba(255,255,255,0.08)] text-white rounded-lg backdrop-blur-[81.6px] flex items-center space-x-2 font-normal border border-[rgba(255,255,255,0.20)] self-start lg:self-center text-[10px] sm:text-[14px] lg:text-[16px]">
//               <span>Explore Popular Courses</span>
//               <span> */}
//             {/* Arrow Icon */}
//             {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="flex w-[20px] sm:w-[28px] lg:w-[32px] h-[20px] sm:h-[28px] lg:h-[32px] p-[4px] sm:p-[6px] lg:p-[8px] justify-center items-center rounded bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),rgba(255,255,255,0.12)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//                 >
//                   <path
//                     d="M8.36823 13.866C8.22512 13.866 8.09854 13.8325 7.98846 13.7653C7.87838 13.6982 7.79857 13.6053 7.74904 13.4865C7.69952 13.3677 7.68851 13.2463 7.71603 13.1224C7.74354 12.9985 7.80134 12.8953 7.88939 12.8127L13.008 7.99525L7.88939 3.19333C7.82335 3.13136 7.77381 3.06165 7.74079 2.98421C7.70777 2.90676 7.69126 2.82672 7.69126 2.74412C7.69126 2.6615 7.70777 2.58405 7.74079 2.51176C7.77381 2.43948 7.82335 2.37235 7.88939 2.31039C7.95544 2.24843 8.02975 2.20195 8.1123 2.17098C8.19485 2.14 8.27191 2.12451 8.34346 2.12451C8.41501 2.12451 8.50582 2.14517 8.6159 2.18646C8.69296 2.21744 8.7645 2.26392 8.83055 2.32588L14.4114 7.56153C14.5435 7.68545 14.6096 7.8326 14.6096 8.003C14.6096 8.17339 14.5435 8.32055 14.4114 8.44446L8.83055 13.6801C8.69846 13.804 8.54435 13.866 8.36823 13.866Z"
//                     fill="white"
//                   />
//                 </svg>
//               </span>
//             </button> */}
//             <Button />
//           </div>

//           {/* Cards row - scrollable on mobile */}
//           <div className="mt-[20px] sm:mt-[40px] flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide">
//             {[
//               {
//                 src: "image 30.png",
//                 text: "PMI Project Management - Ready Courseware",
//               },
//               {
//                 src: "image 31.png",
//                 text: "Meta Front End Developer Professional Certificate Course",
//               },
//               {
//                 src: "image 32.png",
//                 text: "IBM Software Foundation C++ Certification Course",
//               },
//               {
//                 src: "image 33.png",
//                 text: "Meta Front End Developer Professional Certificate Course",
//               },
//             ].map((item, i) => (
//               <div key={i} className="flex-shrink-0">
//                 <div className="bg-white w-[200px] sm:w-[260px] lg:w-[312px] h-[100px] sm:h-[120px] lg:h-[140px] flex items-center justify-center rounded-2xl">
//                   <img
//                     src={item.src}
//                     alt="course"
//                     className="max-h-[80px] sm:max-h-[90px] lg:max-h-[100px] object-contain"
//                   />
//                 </div>
//                 <p className="text-white text-[10px] sm:text-[14px] lg:text-[16px] mt-2 w-[200px] sm:w-[260px] lg:w-[312px]">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
