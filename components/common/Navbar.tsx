/* eslint-disable @next/next/no-img-element */
import { IconChevronDown } from "@tabler/icons-react";

function Navbar() {
  return (
    <section className="bg-primary rounded-2xl relative mx-5 bg-[url('/banner-bg.png')] bg-cover bg-center bg-no-repeat  ">
      <nav className="flex justify-between items-center px-4 mx-5 mb-4">
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
    </section>
  );
}

export default Navbar;
