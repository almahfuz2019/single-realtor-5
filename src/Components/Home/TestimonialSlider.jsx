/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const testimonials = [
  {
    name: "John David",
    title: "Tech Specialist",
    review:
      "Pablo Gavi was an exceptional realtor. Their dedication, in-depth knowledge of the market, and keen negotiation skills helped us secure our dream home. From start to finish, they were professional, attentive, and always had our best interests at heart. Highly recommend!",
    image: "https://i.ibb.co/vdwRznF/Rectangle-3896-1.png",
    stars: 5,
  },
  {
    name: "Emily Rossie",
    title: "Dentist",
    review:
      "We couldn't have asked for a better realtor than Pablo Gavi. They made the home-buying process seamless and stress-free. Their expertise and personalized approach ensured we found the perfect home in no time. Thank you for making our dream a reality!",
    image: "https://i.ibb.co/vdwRznF/Rectangle-3896-1.png",
    stars: 5,
  },
  {
    name: "Michael & Lisa Kendle",
    title: "Happy Client",
    review:
      "Pablo Gavi exceeded our expectations in every way. Their attention to detail, market insights, and unwavering commitment made selling our home a breeze. We were impressed by their proactive communication and dedication to achieving the best outcome. Truly exceptional service.",
    image: "https://i.ibb.co/vdwRznF/Rectangle-3896-1.png",
    stars: 5,
  },
  {
    name: "David Smith",
    title: "Eco Analyst",
    review:
      "I can't thank Pablo Gavi enough for their outstanding service. They guided us through every step of selling our home, providing expert advice and support. Their marketing strategy was spot on, leading to a quick and profitable sale. We highly recommend Pablo Gavi to anyone in need of a top-notch realtor!",
    image: "https://i.ibb.co/vdwRznF/Rectangle-3896-1.png",
    stars: 5,
  },
  {
    name: "Jessica Brown",
    title: "Teacher",
    review:
      "Choosing Pablo Gavi was the best decision we made in our home-buying journey. Their patience, and deep knowledge of the market made us feel confident and well-informed. They went above and beyond to find us the perfect home. We are forever grateful!",
    image: "https://i.ibb.co/vdwRznF/Rectangle-3896-1.png",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(max-width: 600px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider p-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`keen-slider__slide px-6 py-10 custom-shadow rounded-lg shadow-md ${
              currentSlide === index ? "current-slide" : ""
            }`}
          >
            <div className="flex justify-center gap-2 mt-5 border-b-1 border border-x-0 border-[#201A1E33] pb-8 mb-5 border-t-0">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <Image
                  key={i}
                  src="https://i.ibb.co/FhJCBWm/Star-24.png"
                  height="35"
                  width="35"
                  alt="Star"
                  className="rounded-full cursor-pointer"
                />
              ))}
            </div>
            <p className="text-xl text-justify font-normal font-merriweather text-accent border-b-1 border border-x-0 border-[#201A1E33] pb-8 mb-5 border-t-0 px-6">
              {testimonial.review}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src={testimonial.image}
                height={60}
                width={60}
                alt={testimonial.name}
              />
              <div>
                <p className="text-sm md:text-xl text-justify text-accent font-normal">
                  {testimonial.name}
                </p>
                <p className="text-sm md:text-base text-justify text-accent font-light">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loaded && (
        <div className="flex justify-center mt-4 items-center gap-4">
          <Image
            onClick={() => instanceRef.current.prev()}
            src="https://i.ibb.co/c6BWbKS/Frame-1000008071.png"
            height="50"
            width="50"
            alt="Previous"
            className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
          />
          <span className="text-xl">
            {currentSlide + 1} / {testimonials.length}
          </span>
          <Image
            onClick={() => instanceRef.current.next()}
            src="https://i.ibb.co/1f270vg/Frame-1000008072.png"
            height="50"
            width="50"
            alt="Next"
            className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
          />
        </div>
      )}
    </div>
  );
};
export default TestimonialSlider;
