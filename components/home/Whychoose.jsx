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
