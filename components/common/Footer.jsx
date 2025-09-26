"use client";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandWhatsapp,
  IconClock,
  IconCalendarTime,
} from "@tabler/icons-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  return (
    <footer className="bg-primary mx-5 mt-10 rounded-2xl text-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-24 p-8">
        <div className="flex flex-col gap-4 flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/Footer-logo.png"
              alt="Logo"
              className="w-24 h-auto ml-[51px]"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-1 ml-[51px]">
            <a href="#">
              <img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 ml-15">
          <h3 className="font-regular mb-4 text-[24px]">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-[16px] font-light">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Vendors</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Popular  */}
        <div className="flex-1 -ml-18">
          <h3 className="font-regular mb-4 text-[24px]">
            Popular Certifications
          </h3>
          <ul className="flex flex-col gap-2 text-[16px] font-light">
            <li>PMI Project Management - Ready Courseware</li>
            <li>Meta Front End Developer Professional Certificate Course</li>
            <li>Meta Front End Developer Professional Certificate Course</li>
            <li>IBM Software Foundation C++ Certification Course</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="flex-1">
          <h3 className="font-regular mb-4 text-[24px]">Connect With Us</h3>
          <ul className="flex flex-col gap-3 font-light">
            <li className="flex items-start gap-2">
              <IconMapPin size={32} />
              <span>
                Sai Regency, NH 33, Dimna, Mango, Jamshedpur, Jharkhand 831018
                INDIA
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IconMail size={18} /> hello@doyourcert.com
            </li>
            <li className="flex items-center gap-2">
              <IconPhone size={18} /> +91 9545093101
            </li>
            <li className="flex items-center gap-2">
              <IconBrandWhatsapp size={18} /> +91 8271529201
            </li>
            <li className="flex items-center gap-2">
              <IconCalendarTime size={18} /> Mon - Sat | 24*7
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className=" border-white/20 flex justify-between items-center px-8 py-4 text-xs flex-col md:flex-row gap-3">
        <div className="flex gap-4 text-[16px]">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">T&C</a>
        </div>
        <p className="text-[16px]">
          Designed & Developed by{" "}
          <span className="font-bold text-[16px]">
            <a href="https://dotsyndicate.com/" target="_blank">
              {" "}
              DotSyndicate
            </a>
          </span>
        </p>
        <p className="text-[16px] flex gap-4 items-center">
          © DoYourCert Ltd 2025. All rights reserved.
          <img
            onClick={scrollToTop}
            src="/scrollToTop.png"
            alt="Scroll to top"
            className="w-[60px] h-[60px] cursor-pointer"
          />
        </p>

        {/* Scroll To Top (replace later) */}
        {/* <div className="absolute bottom-6 right-8"></div> */}
      </div>
    </footer>
  );
}

export default Footer;
