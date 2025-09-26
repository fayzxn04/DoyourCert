"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    date: "January 12, 2024",
    title: "Top 5 Online Certifications to Boost Your Career in 2025",
    image: "/b-1.png",
    link: "#",
  },
  {
    id: 2,
    date: "February 20, 2024",
    title: "How E-Learning Certificates Are Transforming Professional Growth",
    image: "/b-2.png",
    link: "#",
  },
  {
    id: 3,
    date: "March 15, 2024",
    title: "The Future of Skills: Why Online Credentials Matter More Than Ever",
    image: "/b-3.png",
    link: "#",
  },
  {
    id: 4,
    date: "April 5, 2024",
    title: "Why Lifelong Learning Will Shape the Future Workforce",
    image: "/b-1.png",
    link: "#",
  },
  {
    id: 5,
    date: "May 1, 2024",
    title: "Top Trends in E-Learning Platforms for 2025",
    image: "/b-2.png",
    link: "#",
  },
];

function BlogSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < blogs.length - 3) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="mx-10 my-16">
      <p className="text-[16px] text-[#272088] font-light">BLOGS</p>
      <div className="flex items-center justify-between">
        <h2 className="text-[54px] font-light">Our Insights & Updates</h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 cursor-pointer"
          >
            <IconChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={current >= blogs.length - 3}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 cursor-pointer"
          >
            <IconChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mt-10 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {blogs.map((blog) => (
            <div key={blog.id} className="min-w-[33.33%] max-w-[33.33%]">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[420px] h-[324px] object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4">{blog.date}</p>
              <h3 className="font-medium text-lg mt-1 text-[24px]">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="text-primary text-sm mt-2 inline-flex items-center gap-1 text-[16px] font-bold text-[#272088]"
              >
                Find out more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
