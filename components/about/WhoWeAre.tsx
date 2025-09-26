import React from "react";

export default function WhoWeAre() {
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <div className="text-[#272088]">WHO WE ARE</div>
      <div className="text-[54px] max-w-[856px] text-center font-regular leading-snug tracking-tight ">
        Empowering the Next Generation of Global Tech Leaders
      </div>
      <div className="text-[18px] max-w-[856px] text-center font-regular mt-[21px]">
        Welcome to DoYourCert, a trusted platform committed to delivering
        <span className="text-[#272088] font-bold">
          {" "}
          world-class, affordable certification programs.{" "}
        </span>{" "}
        With a team of certified educators and industry experts, we have
        successfully trained over{" "}
        <span className="text-[#272088] font-bold">
          {" "}
          10,000 professionals
        </span>{" "}
        across diverse domains including{" "}
        <span className="text-[#272088] font-bold">
          {" "}
          Cybersecurity, Project Management, Cloud <br />
          Computing, and Networking.{" "}
        </span>
        <br /> Our focus is on
        <span className="text-[#272088] font-bold">
          {" "}
          real-world learning, mentorship, and career readiness,
        </span>{" "}
        ensuring every learner gains the skills and confidence to thrive in
        today’s competitive IT landscape.
      </div>
    </section>
  );
}
