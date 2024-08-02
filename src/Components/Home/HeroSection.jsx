import React from "react";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
const HeroSection = () => {
  return (
    <div  className="flex flex-row bg-[#f2e8e4] overflow-hidden xl:h-screen mb-16 md:mb-20 xl:mb-24">
      {/* Left section with social icons */}
      <div className="xl:flex flex-col items-center justify-center p-4 bg-neutral lg:w-[100px] hidden border border-x-0 border-t-0 border-primary">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-10 mb-8"
        >
          <div className="transform -rotate-90 mb-8 w-40">
            <p className="text-4xl  text-gray-700 font-montserrat font-extralight">
              Follow Us
            </p>
          </div>
          <div className="bg-gray-700 h-40 w-[1px]"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.facebook.com/"
            className="bg-[#861E32] hover:bg-primary rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
            data-aos="fade-up"
          >
            <Image
              src="/Images/Hero/Hero_facebook_Icon.webp"
              height={40}
              width={40}
              alt="Facebook"
              className=""
            />
          </a>
          <a
            href="https://x.com/"
            className="bg-[#861E32] hover:bg-primary rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
            data-aos="fade-up"
          >
            <Image
              src="/Images/Hero/Hero_twitter_Icon.webp"
              height={40}
              width={40}
              alt="Twitter"
              className=""
            />
          </a>
          <a
            href="https://www.instagram.com/"
            className="bg-[#861E32] hover:bg-primary rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
            data-aos="fade-up"
          >
            <Image
              src="/Images/Hero/Hero_instragram_Icon.webp"
              height={40}
              width={40}
              alt="Instagram"
              className=""
            />
          </a>
        </div>
      </div>

      {/* Right section with heading, subheading, and buttons */}
      <div className="flex-1 flex flex-col-reverse xl:flex-nowrap gap-y-6 lg:flex-row xl:justify-between items-center bg-neutral border border-t-0 border-r-0 border-gray-700">
        <div
          className="p-8 text-center lg:text-left w-full xl:w-auto"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-normal mb-4 font-source-serif-pro">
            Unlock A Brighter Future. <br /> Find Your Dream Home.
          </h1>
          <div className="flex flex-row justify-center mt-10 gap-x-4 gap-y-4 xl:space-x-4 w-full">
            <button
              className="px-6 py-2 text-lg md:text-xl text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32] hover:text-neutral hover:shadow-lg font-montserrat"
              data-aos="zoom-in"
            >
              Explore Condos
            </button>

            <button
              className="px-6 py-2 text-lg md:text-xl text-black border-black bg-transparent border rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32] hover:text-neutral hover:shadow-lg flex gap-2 items-center font-montserrat"
              data-aos="zoom-in"
            >
              <IoIosCall /> Book A Call
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto lg:h-full" data-aos="fade-left">
          <Image
            src="/Images/Hero/HeroSection_Banner.png"
            alt="Living Room"
            height={815}
            width={960}
            className="w-full lg:h-full object-cover bg-fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
