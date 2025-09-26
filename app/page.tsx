/* eslint-disable @next/next/no-img-element */
import React from "react";
import Docert from "../components/home/Docert";
import Cards from "../components/common/Cards";
import Docerts from "../components/home/Docerts";
import Popular from "../components/home/Popular";
import OurVendors from "../components/home/OurVendors";
import { IconChevronDown } from "@tabler/icons-react";
import Whychoose from "../components/home/Whychoose";
import Testimonials from "../components/home/Testimonials";
import Faqs from "../components/home/Faqs";
import Blog from "../components/home/Blog";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <section
        className="bg-primary main-container my-5 relative mx-5 bg-[url('/banner-bg.png')]  bg-cover bg-center bg-no-repeat"
        id="#"
      >
        <nav className="flex justify-between items-center px-4 mx-5">
          <div className="flex flex-col  ">
            <img
              src="Logos.png"
              className="mx-5 my-5 w-[75px] h-[64px] "
              alt="Logo"
            />

            <p className="font-regular text-white uppercase text-[8.69px] absolute top-22 left-16">
              Doyourcert
            </p>
            <p className="font-regular text-white uppercase text-[4.46px] absolute top-25 left-17">
              Get certified online
            </p>
          </div>
          <ul className="flex font-regular text-white space-x-8 px-4 cursor-pointer">
            <li className="flex items-center justify-center text-center gap-2">
              Courses <IconChevronDown className="mt-1 " />
            </li>
            <li className="flex items-center justify-center text-center gap-2">
              Certfications <IconChevronDown className="mt-1 " />
            </li>
            <li className="flex items-center justify-center">About us</li>
            <li className="flex items-center justify-center">Gmat</li>
            <li className="flex items-center justify-center">Blogs</li>
            <li className="bg-white rounded-2xl text-[#272088] px-3 py-1 items-center">
              Contact Us
            </li>
          </ul>
        </nav>
        <main className="grid grid-cols-2 ">
          <div className="px-[96px] pt-[108px]">
            <h1 className="text-5xl font-regular text-white leading-snug">
              Unlock Certification with Expert-Led Courses for Guaranteed
              Success
            </h1>
            <p className="font-light text-white text-lg mt-5">
              Get certified faster with DoYourCert! Access industry-leading
              courses from top vendors designed to ensure your success.
            </p>
            <button className="mt-8 px-6 py-3 bg-[rgba(255,255,255,0.08)] text-white  rounded-lg  backdrop-blur-[81.6px] flex items-center space-x-2 font-normal border border-[rgba(255,255,255,0.20)]">
              <span>Explore Popular Courses</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex w-[32px] h-[32px] p-[8.8px] justify-center items-center rounded   bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),rgba(255,255,255,0.12)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                >
                  <path
                    d="M8.36823 13.866C8.22512 13.866 8.09854 13.8325 7.98846 13.7653C7.87838 13.6982 7.79857 13.6053 7.74904 13.4865C7.69952 13.3677 7.68851 13.2463 7.71603 13.1224C7.74354 12.9985 7.80134 12.8953 7.88939 12.8127L13.008 7.99525L7.88939 3.19333C7.82335 3.13136 7.77381 3.06165 7.74079 2.98421C7.70777 2.90676 7.69126 2.82672 7.69126 2.74412C7.69126 2.6615 7.70777 2.58405 7.74079 2.51176C7.77381 2.43948 7.82335 2.37235 7.88939 2.31039C7.95544 2.24843 8.02975 2.20195 8.1123 2.17098C8.19485 2.14 8.27191 2.12451 8.34346 2.12451C8.41501 2.12451 8.50582 2.14517 8.6159 2.18646C8.69296 2.21744 8.7645 2.26392 8.83055 2.32588L14.4114 7.56153C14.5435 7.68545 14.6096 7.8326 14.6096 8.003C14.6096 8.17339 14.5435 8.32055 14.4114 8.44446L8.83055 13.6801C8.69846 13.804 8.54435 13.866 8.36823 13.866ZM13.9491 8.61485H2.06085C1.87372 8.61485 1.71686 8.55548 1.59027 8.43672C1.46368 8.31795 1.40039 8.17339 1.40039 8.003C1.40039 7.8326 1.46644 7.68545 1.59853 7.56153C1.73062 7.43761 1.88473 7.37565 2.06085 7.37565H13.9491C14.1253 7.37565 14.2793 7.43761 14.4114 7.56153C14.5435 7.68545 14.6096 7.8326 14.6096 8.003C14.6096 8.17339 14.5463 8.31795 14.4197 8.43672C14.2931 8.55548 14.1362 8.61485 13.9491 8.61485Z"
                    fill="white"
                  />
                  <path
                    d="M14.4114 7.56153L8.83055 2.32588C8.7645 2.26392 8.69296 2.21744 8.6159 2.18646C8.50582 2.14517 8.41501 2.12451 8.34345 2.12451C8.27191 2.12451 8.19485 2.14 8.11229 2.17098C8.02973 2.20195 7.95544 2.24843 7.88939 2.31039C7.82335 2.37235 7.77381 2.43948 7.74079 2.51176C7.70777 2.58405 7.69126 2.6615 7.69126 2.74411C7.69126 2.82672 7.70777 2.90676 7.74079 2.98421C7.77381 3.06165 7.82335 3.13136 7.88939 3.19333L13.0079 7.99525L7.88939 12.8127C7.80134 12.8953 7.74354 12.9985 7.71602 13.1224C7.68851 13.2463 7.69951 13.3677 7.74904 13.4865C7.79857 13.6053 7.87838 13.6982 7.98846 13.7653C8.09854 13.8325 8.22512 13.866 8.36823 13.866C8.54435 13.866 8.69846 13.804 8.83055 13.6801L14.4114 8.44446C14.5435 8.32054 14.6096 8.17339 14.6096 8.003M14.4114 7.56153C14.5435 7.68545 14.6096 7.8326 14.6096 8.003M14.4114 7.56153C14.2793 7.43761 14.1253 7.37565 13.9491 7.37565H2.06085C1.88473 7.37565 1.73062 7.43761 1.59853 7.56153C1.46644 7.68545 1.40039 7.8326 1.40039 8.003C1.40039 8.17339 1.46368 8.31797 1.59027 8.43672C1.71686 8.55548 1.87372 8.61485 2.06085 8.61485H13.9491C14.1362 8.61485 14.2931 8.55548 14.4197 8.43672C14.5463 8.31797 14.6096 8.17339 14.6096 8.003"
                    stroke="white"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center ">
            <img
              src="student-updated.png"
              className="scale-80 absolute -right-19 top-8 "
              alt="Student"
            />
            <img
              src="gmail.png"
              className="z-100 -bottom-28 absolute w-[74px] h-[74px] right-24"
              alt="gmail"
            />
            <img
              src="Whatsapp.png"
              className="z-100 -bottom-28 absolute w-[74px] h-[74px] right-4"
              alt="Whatsapp"
            />
          </div>
        </main>
      </section>
      <Cards />
      <Docert />
      {/* <Docerts /> */}
      <Popular />
      <OurVendors />
      <Whychoose />
      <Testimonials />
      <Faqs />
      <Blog />
      <Footer />
    </>
  );
}
