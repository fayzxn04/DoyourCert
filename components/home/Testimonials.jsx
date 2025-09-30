// function Testimonials() {
//   return (
//     <section className="px-[60px] py-[63px] bg-[#F8F8F8;]">
//       <p className="uppercase text-[16px]">Testimonials</p>
//       <p className="text-[54px] capitalize">What our customers say</p>
//       <div className="py-[40px] flex gap-4 ">
//         <div className="bg-primary p-[30px] rounded-2xl capitalize text-white font-light border border-[#D8D9D9] ">
//           outstanding company with a team of highly experienced and
//           knowledgeable professionals. Their expertise and dedication make every
//           interaction seamless and productive.{" "}
//           <p className="mt-[16px]">Priya Nair</p>
//         </div>
//         <div className="border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light">
//           Excellent service, top notch trainers and very cautious customer
//           service. I trained for AWSSA and I strongly recommend their services
//           to anyone who is interested in in depth knowledge.
//           <p className="mt-[16px]">Neha Patel</p>
//         </div>
//         <div className="border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light">
//           I’m thrilled to have found this training center. They offer excellent
//           training, support, and tutoring for all IT courses and are always
//           ready to help with exam prep and certifications.
//           <p className="mt-[16px]">Rohit Mehra</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

function Testimonials() {
  return (
    <section className="px-4 sm:px-8 md:px-[60px] py-10 md:py-[63px] bg-[#F8F8F8]">
      {/* Heading */}
      <p className="uppercase text-sm md:text-[16px]">Testimonials</p>
      <p className="text-2xl sm:text-3xl md:text-[54px] capitalize">
        What our customers say
      </p>

      {/* Cards */}
      <div
        className="
          py-10 flex gap-4 
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory md:snap-none
          scrollbar-hide
        "
      >
        {/* Card 1 */}
        <div
          className="
          min-w-[85%] sm:min-w-[45%] md:min-w-0
          bg-primary p-[30px] rounded-2xl capitalize text-white font-light border border-[#D8D9D9] 
          snap-center
        "
        >
          outstanding company with a team of highly experienced and
          knowledgeable professionals. Their expertise and dedication make every
          interaction seamless and productive.
          <p className="mt-4">Priya Nair</p>
        </div>

        {/* Card 2 */}
        <div
          className="
          min-w-[85%] sm:min-w-[45%] md:min-w-0
          border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light 
          snap-center
        "
        >
          Excellent service, top notch trainers and very cautious customer
          service. I trained for AWSSA and I strongly recommend their services
          to anyone who is interested in in depth knowledge.
          <p className="mt-4">Neha Patel</p>
        </div>

        {/* Card 3 */}
        <div
          className="
          min-w-[85%] sm:min-w-[45%] md:min-w-0
          border border-[#D8D9D9] p-[30px] rounded-2xl capitalize font-light 
          snap-center
        "
        >
          I’m thrilled to have found this training center. They offer excellent
          training, support, and tutoring for all IT courses and are always
          ready to help with exam prep and certifications.
          <p className="mt-4">Rohit Mehra</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
