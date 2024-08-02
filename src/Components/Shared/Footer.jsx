"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300000);
  };

  return (
    <footer
      id="footer"
      className="bg-accent pt-8 md:pt-12 mt-16 md:mt-20 xl:mt-24 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Image
          src="/Images/Footer/logo.webp" // Replace with your local image path
          height={120}
          width={200}
          alt="footer logo"
          className="mb-12 -mt-12"
          data-aos="fade-down" // AOS animation
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3" data-aos="fade-up">
            <h2 className="text-[#E4D4C8] font-source-serif-pro text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
              Matthew Davidson
            </h2>
            <p className="text-base md:text-lg text-[#E4D4C8] mt-4">
              A Real Estate Professional, top performing agent with 15 years of
              NYC real estate experience, exceptional service and expert
              guidance for all your real estate needs.
            </p>
            <h3 className="text-[#E4D4C8] font-source-serif-pro  text-2xl md:text-3xl mt-8 font-normal leading-tight font-merriweather">
              Contact Us
            </h3>
            <address className="mt-6 space-y-4 md:space-y-6 text-[#E0D7C7] text-base not-italic">
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="/Images/Footer/call_icon.webp"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </div>
                <a
                  href="tel:+15551234567"
                  className="ml-4 hover:text-[#f6f3f3] cursor-pointer"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="/Images/Footer/Email_Icon.webp"
                    alt="Email"
                    width={30}
                    height={30}
                  />
                </div>
                <a
                  href="mailto:matthew.davidson@xyzrealty.com"
                  className="ml-4 hover:text-[#f6f3f3] cursor-pointer"
                >
                  matthew.davidson@xyzrealty.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="/Images/Footer/Location_Icon.webp"
                    alt="Location"
                    width={30}
                    height={30}
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1234+Broadway,+New+York,+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 hover:text-[#f6f3f3] cursor-pointer"
                >
                  1234 Broadway, New York, NY 10001
                </a>
              </div>
            </address>
          </div>

          {/* Middle Section */}
          <nav className="w-full lg:w-1/3 lg:px-8" data-aos="fade-right">
            <h2 className="text-[#E4D4C8] font-source-serif-pro text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
              Useful Links
            </h2>
            <ul className="mt-4 space-y-2 text-sm md:text-lg text-[#E0D7C7] font-roboto">
              <li>
                <a href="#home" className="hover:text-[#f6f3f3]">
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutme" className="hover:text-[#f6f3f3]">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f6f3f3]">
                  Services
                </a>
              </li>
              <li>
                <a href="#listing" className="hover:text-[#f6f3f3]">
                  Featured Condos
                </a>
              </li>
              <li>
                <a href="#testimonial" className="hover:text-[#f6f3f3]">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#f6f3f3]">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f6f3f3]">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section */}
          <div
            className="w-full lg:w-1/3 lg:pl-8 border border-y-0 border-r-0 border-l-0 lg:border-l"
            data-aos="fade-left"
          >
            <h2 className="text-[#E4D4C8] font-source-serif-pro  text-2xl md:text-3xl font-normal leading-tight md:leading-snug text-center font-merriweather">
              Contact Us
            </h2>
            <form
              className="mt-4 space-y-4 text-base md:text-base text-neutral"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className={`w-full p-2 bg-transparent border-b-2 ${
                    errors.name ? "border-red-500" : "border-[#F3E3E2CC]"
                  } focus:border-primary`}
                  {...register("name", { required: "Name is required" })}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className={`w-full p-2 bg-transparent border-b-2 ${
                    errors.address ? "border-red-500" : "border-[#F3E3E2CC]"
                  } focus:border-primary`}
                  {...register("address", { required: "Address is required" })}
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-2 bg-transparent border-b-2 ${
                  errors.email ? "border-red-500" : "border-[#F3E3E2CC]"
                } focus:border-primary`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <textarea
                placeholder="Type Your Message ..."
                className={`w-full p-2 bg-transparent border-b-2 ${
                  errors.message ? "border-red-500" : "border-[#F3E3E2CC]"
                } focus:border-primary`}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              <button
                type="submit"
                className="w-full p-1.5 font-montserrat bg-[#E4D4C8] text-accent text-lg rounded-md hover:bg-[#f6f3f3] transform transition-transform hover:scale-105"
              >
                Send
              </button>
            </form>
            {isSubmitted && (
              <div className="mt-4 text-green-500">
                Your message has been sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#E4D4C8] py-4 mt-20">
        <div className="max-w-[1420px] mx-auto px-4 grid-cols-1 grid lg:grid-cols-3 items-center lg:justify-between">
          <ul className="flex gap-x-2 px-1">
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className="">
                <Image
                  src="/Images/Footer/Facebook_Icon.png"
                  height={32}
                  width={32}
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className="">
                <Image
                  src="/Images/Footer/Twitter_Icon.png"
                  height={32}
                  width={32}
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className=" ">
                <Image
                  src="/Images/Footer/Instagram_ICon.png"
                  height={32}
                  width={32}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
          <div className="lg:text-center text-left mt-6 lg:mt-0 font-montserrat">
            <p className="text-secondary text-base font-weight-400">
              Webflow Template by TECHPLATO.Inc
            </p>
            <p className="text-secondary text-base font-weight-400">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
