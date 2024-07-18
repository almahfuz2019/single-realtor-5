"use client";
import Image from "next/image";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <div
      id="testimonial"
      className=" py-12 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className=" ">
        {/* Header section */}
        <header className="flex items-center  justify-center gap-10 mb-24">
          <div
            data-aos="fade-right"
            className="bg-accent hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div>
            <h1
              data-aos="fade-up"
              className="font-normal text-sm text-center lg:text-start"
            >
              Testimonial
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold text-center lg:text-start text-5xl text-accent mt-3"
            >
              Clients Review
            </p>
          </div>
        </header>

        <div className="w-full " data-aos="fade-left">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
}
