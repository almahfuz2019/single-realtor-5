import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import HeroSection from "@/Components/Home/HeroSection";
import Insights from "@/Components/Home/Insights";

import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import WorkProcess from "@/Components/Home/WorkProcess";
import Image from "next/image";
import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div>
        <Image
          src="/Images/Line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10 block xl:hidden"
        />
      </div>
      <About />
      <div>
        <Image
          src="/Images/Line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Services />
      <div>
        <Image
          src="/Images/Line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      {/* <Neighborhood /> */}
      <Featured />
      <div>
        <Image
          src="/Images/Line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <WorkProcess />
      <Contact />
      <Testimonial />
      <div>
        <Image
          src="/Images/Line.webp"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10 "
        />
      </div>
      <Insights />
      <a href="#home">
        <div className="fixed text-xl sm:text-2xl md:text-4xl p-2 sm:p-3 md:p-4 bg-white hover:bg-[#201A1E] text-[#201A1E] hover:border-white hover:text-white border border-[#201A1E] cursor-pointer z-10 bottom-5 right-2 rounded-full">
          <FaArrowTurnUp />
        </div>
      </a>
    </div>
  );
}
