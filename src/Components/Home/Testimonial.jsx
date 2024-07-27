"use client";
import Image from "next/image";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <div
      id="testimonial"
      className=" mx-auto  px-4 py-28 md:p-8 md:py-36 xl:py-40"
    >
      <div className=" ">
        {/* Header section */}
        <header className="flex items-center justify-center gap-10 mb-16 md:mb-20 xl:mb-24">
          <div
            data-aos="fade-right"
            className="bg-accent hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div>
            <h1 className="font-normal text-sm text-center lg:text-start">
              Testimonial
            </h1>
            <p className="font-bold text-center lg:text-start text-4xl md:text-5xl text-accent mt-1 xl:mt-3">
              Client’s Review
            </p>
          </div>
        </header>

        <div className="" data-aos="fade-left">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
}
