import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="max-w-screen-xl mx-auto px-4 py-28 md:p-8 md:py-36 xl:py-40 "
    >
      <div className="text-center mb-8">
        {/* Header section */}
        <header className="flex items-center justify-center gap-10 mb-16 md:mb-20 xl:mb-24">
          <div
            data-aos="fade-right"
            className="bg-accent hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div>
            <h1
              data-aos="fade-up"
              className="font-normal text-sm text-center lg:text-start font-lato"
            >
              Who I Am ?
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold text-center lg:text-start text-4xl md:text-5xl text-accent mt-1 xl:mt-3 font-source-serif-pro "
            >
              About Me
            </p>
          </div>
        </header>
      </div>
      <div className="flex flex-col lg:flex-row gap-10   sm:gap-14 xl:gap-20 mb-8">
        {/* Left section with image and introduction */}
        <div className="lg:w-1/3 lg:mb-0" data-aos="fade-up">
          <Image
            src="/Images/About/me.webp"
            alt="Pablo Gavi"
            className="rounded-lg w-full h-64 sm:h-[500px] lg:h-auto object-cover object-top"
            width={400}
            height={600}
          />
        </div>
        <div className="lg:w-2/3" data-aos="fade-left">
          <p className="mb-6 text-lg md:text-xl text-[#201A1ECC]">
            Hi, I'm Pablo Gavi, a dedicated Real Estate Broker based in New York
            City. With a Bachelor's Degree in Business Administration from New
            York University and 15 years of experience, I specialize in luxury
            residential properties and commercial real estate. Currently serving
            as a Senior Broker at Lifespring Realty, I am committed to providing
            exceptional service, personalized guidance, and expert market
            insights to help my clients achieve their real estate goals. My
            extensive knowledge of the NYC market, strong industry connections,
            and meticulous attention to detail ensure a seamless and successful
            transaction experience.
          </p>
          <h3 className="my-6 mb-6 text-lg md:text-xl">
            The exceptional qualities I have-
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div
              className="p-4 rounded-lg border border-[#201A1E33] flex items-center"
              data-aos="zoom-in"
            >
              <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#201A1E] font-montserrat ">
                <Image
                  src="/Images/About/checkmark-square.webp"
                  height={20}
                  width={20}
                  alt="Checkmark"
                />{" "}
                Exceptional Market Expertise
              </p>
            </div>
            <div
              className="p-4 rounded-lg border border-[#201A1E33] flex items-center"
              data-aos="zoom-in"
            >
              <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#201A1E] font-montserrat ">
                <Image
                  src="/Images/About/checkmark-square.webp"
                  height={20}
                  width={20}
                  alt="Checkmark"
                />{" "}
                Excellent Communication
              </p>
            </div>
            <div
              className="p-4 rounded-lg border border-[#201A1E33] flex items-center"
              data-aos="zoom-in"
            >
              <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#201A1E] font-montserrat ">
                <Image
                  src="/Images/About/checkmark-square.webp"
                  height={20}
                  width={20}
                  alt="Checkmark"
                />{" "}
                Unique Negotiation Skills
              </p>
            </div>
            <div
              className="p-4 rounded-lg border border-[#201A1E33] flex items-center"
              data-aos="zoom-in"
            >
              <p className="md:text-lg text-base flex items-center gap-2 font-medium text-[#201A1E] font-montserrat ">
                <Image
                  src="/Images/About/checkmark-square.webp"
                  height={20}
                  width={20}
                  alt="Checkmark"
                />{" "}
                Client-Focused Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with fun facts and gallery */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <p
            className="mb-6  text-lg md:text-xl text-[#201A1ECC]"
            data-aos="fade-up"
          >
            Explore fun facts about the real estate experience, transactions
            that already have been done and smiley faces of those who have got
            benefitted from us by buying their dream home from the world of real
            estate. Dive into the lighter side of your realtor which may excite
            for a step ahead to explore your dream home.
          </p>
          <div className="grid grid-cols-2 max-w-screen-sm gap-4 mb-6 mt-10">
            <div
              className="p-6 rounded-2xl border border-[#201A1E33] text-center"
              data-aos="fade-right"
            >
              <h4 className="text-6xl md:text-7xl mb-2 font-bold text-primary font-montserrat ">
                15
              </h4>
              <p className="text-[#201A1E]">Years of Experience</p>
            </div>
            <div
              className="p-6 rounded-2xl border border-[#201A1E33] text-center"
              data-aos="fade-left"
            >
              <h4 className="text-6xl md:text-7xl mb-2 font-bold text-primary font-montserrat ">
                300+
              </h4>
              <p className="text-[#201A1E]">Property Transactions</p>
            </div>
            <div
              className="p-6 rounded-2xl border border-[#201A1E33] text-center"
              data-aos="fade-right"
            >
              <h4 className="text-6xl md:text-7xl mb-2 font-bold text-primary font-montserrat ">
                1k+
              </h4>
              <p className="text-[#201A1E]">Happy Clients</p>
            </div>
            <div
              className="p-6 rounded-2xl border border-[#201A1E33] text-center"
              data-aos="fade-left"
            >
              <h4 className="text-6xl md:text-7xl mb-2 font-bold text-primary font-montserrat ">
                1B+
              </h4>
              <p className="text-[#201A1E]">Net Revenue</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 grid grid-cols-1 gap-5">
          <Image
            src="/Images/About/another_Image1.webp"
            alt="Team"
            className="rounded-lg w-full h-auto"
            width={481}
            height={313}
            data-aos="fade-up"
          />
          <div className="grid grid-cols-2 gap-5">
            <Image
              src="/Images/About/another_Image2.webp"
              alt="House"
              className="rounded-lg w-full h-auto"
              width={229}
              height={250}
              data-aos="fade-up"
            />
            <Image
              src="/Images/About/another_Image3.webp"
              alt="Pablo"
              className="rounded-lg w-full h-auto"
              width={229}
              height={250}
              data-aos="fade-up"
            />
          </div>
          <div className="mt-6 text-center lg:mt-0" data-aos="fade-up">
            <button className="px-6 py-2 text-neutral w-full bg-primary rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
