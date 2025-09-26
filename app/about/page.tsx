/* eslint-disable @next/next/no-img-element */
import React from "react";
import WhoWeAre from "../../components/about/WhoWeAre";
import Cards from "../../components/common/Cards";
export default function About() {
  return (
    <>
      <section className="bg-primary main-container my-5 relative mx-5 ">
        <nav className="flex justify-between items-center px-4  mx-5">
          <img
            src="Logos.png"
            className="mx-5 my-5 w-[75px] h-[64px] "
            alt="Logo"
          />
          <ul className="flex font-regular text-white space-x-8 px-4 text-[16px] cursor-pointer">
            <li>Courses</li>
            <li>Certfications</li>
            <li>About us</li>
            <li>Gmat</li>
            <li>Blogs</li>
            <li className="bg-white rounded-2xl text-[#272088] px-3 py-1 items-center">
              Contact Us
            </li>
          </ul>
        </nav>
        <main className="grid grid-cols-2 max-w[780px] items-center">
          <div className="px-[96px]">
            <h1 className="text-5xl font-regular text-white leading-snug mt-[70px]">
              Build Your Future with World-Class IT Certifications
            </h1>
            <p className="font-light text-white text-lg mt-5">
              Affordable, globally recognized IT certifications designed to
              build real-world skills and boost your career.
            </p>
          </div>
        </main>
      </section>
      <Cards />
      <WhoWeAre />
    </>
  );
}
