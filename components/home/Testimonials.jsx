function Testimonials() {
  return (
    <section className="px-[60px] py-[63px] bg-[#F8F8F8;]">
      <p className="uppercase text-[16px]">Testimonials</p>
      <p className="text-[54px] capitalize">What our customers say</p>
      <div className="py-[40px] flex gap-4 ">
        <div className="bg-primary p-[30px] rounded-2xl capitalize text-white font-light border border-[#D8D9D9] ">
          outstanding company with a team of highly experienced and
          knowledgeable professionals. Their expertise and dedication make every
          interaction seamless and productive.{" "}
          <p className="mt-[16px]">Priya Nair</p>
        </div>
        <div className="border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light">
          Excellent service, top notch trainers and very cautious customer
          service. I trained for AWSSA and I strongly recommend their services
          to anyone who is interested in in depth knowledge.
          <p className="mt-[16px]">Neha Patel</p>
        </div>
        <div className="border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light">
          I’m thrilled to have found this training center. They offer excellent
          training, support, and tutoring for all IT courses and are always
          ready to help with exam prep and certifications.
          <p className="mt-[16px]">Rohit Mehra</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
