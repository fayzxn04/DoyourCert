function OurVendors() {
  const vendors = [
    {
      id: 1,
      logo: "/sponsors/spon-microsoft.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 2,
      logo: "/sponsors/spon-pecb.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 3,
      logo: "/sponsors/spon-comptia.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 4,
      logo: "/sponsors/spon-etrain.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 5,
      logo: "/sponsors/spon-pearson.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 6,
      logo: "/sponsors/spon-cisco.png",
      border: "/Img-big.png",
      size: "big",
    }, // highlighted center
    {
      id: 7,
      logo: "/sponsors/spon-spectre.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 8,
      logo: "/sponsors/spon-wgu.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 9,
      logo: "/sponsors/spon-comptia.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 10,
      logo: "/sponsors/spon-pecb.png",
      border: "/img-skeleton.png",
      size: "small",
    },
    {
      id: 11,
      logo: "/sponsors/spon-microsoft.png",
      border: "/img-skeleton.png",
      size: "small",
    },
  ];

  return (
    <section className="mx-10 my-12">
      <p className="uppercase text-[16px] text-center text-[#272088] font-light">
        Our Vendors
      </p>

      <h2 className="text-[54px] text-center text-[#272088] font-normal mb-8">
        Driving Success with Top Brands
      </h2>

      <div className="relative">
        {/* center overlay behind the logos */}
        <img
          src="/overlay.png"
          alt="overlay"
          className="absolute left-1/2 -top-8 -translate-x-1/2 z-0 w-[600px] pointer-events-none"
        />

        {/* logos row */}
        <div className="relative z-10 flex items-center justify-center gap-6 py-14 overflow-x-auto">
          {vendors.map((v) => (
            <div
              key={v.id}
              className={`relative flex-shrink-0 flex items-center justify-center ${
                v.size === "big" ? "w-[136px] h-[136px]" : "w-[88px] h-[88px]"
              }`}
            >
              {/* border / card image (rounded square background) */}
              <img
                src={v.border}
                alt={`${v.name} border`}
                className="w-full h-full object-contain"
              />

              {/* inner company logo centered over the border */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src={v.logo}
                  alt={v.name}
                  className={
                    v.size === "big"
                      ? "h-[136px] w-[136px] object-contain"
                      : "h-[88px] w-[88px] object-contain"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-18 px-4 py-2 bg-primary text-white rounded-lg flex items-center justify-around mx-auto space-x-2 font-regular">
        <span>Explore all vendors</span>
        <span>
          <img
            src="/right-arrow.png "
            className="p-[8.79px] bg-[#FFFFFF1E] rounded-[4px] outline-none "
            alt="arrow"
          />
        </span>
      </button>
    </section>
  );
}

export default OurVendors;
