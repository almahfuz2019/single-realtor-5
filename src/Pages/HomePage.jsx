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

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div>
        <Image
          src="https://i.ibb.co/Xs1PKcg/Line-26.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10 block xl:hidden"
        />
      </div>
      <About />
      <div>
        <Image
          src="https://i.ibb.co/Xs1PKcg/Line-26.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10"
        />
      </div>
      <Services />
      <div>
        <Image
          src="https://i.ibb.co/Xs1PKcg/Line-26.png"
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
          src="https://i.ibb.co/Xs1PKcg/Line-26.png"
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
          src="https://i.ibb.co/Xs1PKcg/Line-26.png"
          width="1920"
          height="15"
          alt="line"
          className="relative z-10 "
        />
      </div>
      <Insights />
    </div>
  );
}
