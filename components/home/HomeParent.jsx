/* eslint-disable @next/next/no-img-element */
import React from "react";
import Docert from "../../components/home/Docert";
import Cards from "../../components/common/Cards";
import Button from "../../components/common/Button";
// import Docerts from "../../components/home/Docerts";../
import Popular from "../../components/home/Popular";
import OurVendors from "../../components/home/OurVendors";
import { IconChevronDown } from "@tabler/icons-react";
import Whychoose from "../../components/home/Whychoose";
import Testimonials from "../../components/home/Testimonials";
import Faqs from "../../components/home/Faqs";
import Blog from "../../components/home/Blog";
import Footer from "../../components/common/Footer";

export default function HomeParent() {
  return (
    <>
      <main className="main-container my-5 relative mx-5 bg-[url('/bg-home.png')] bg-cover bg-center bg-no-repeat shrink-0">
        {/* Left */}
        <div className=" md:w-[45%] absolute max-md:top-1/3 md:top-1/2 -translate-y-1/2 max-md:left-10 md:left-20 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-regular text-white leading-snug">
            Unlock Certification with Expert-Led Courses for Guaranteed Success
          </h1>
          <p className="font-light text-white text-sm sm:text-base md:text-lg mt-5">
            Get certified faster with DoYourCert! Access industry-leading
            courses from top vendors designed to ensure your success.
          </p>
          <div className="mt-6">
            <Button />
          </div>
        </div>

        {/* Right Content */}
        <div className=" flex items-end justify-center mt-10 md:mt-0 absolute right-5 bottom-5 z-20 ">
          <img
            src="gmail.png"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[74px] lg:h-[74px]"
            alt="gmail"
          />
          <img
            src="Whatsapp.png"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[74px] lg:h-[74px]"
            alt="Whatsapp"
          />
        </div>
        <img
          src="student-updated.png"
          className="max-md:w-[310px] md:w-80 2xl:w-[460px] h-auto absolute bottom-0 right-0"
          alt="Student"
        />
      </main>
      <Cards />
      <Docert />
      <Faqs />
      <Testimonials />
      {/* <Blog /> */}
      {/* <Docerts /> */}
      {/* <Popular /> */}
      {/* <OurVendors /> */}
      {/* <Whychoose /> */}
      {/*
 
      <Footer />  */}
    </>
  );
}
