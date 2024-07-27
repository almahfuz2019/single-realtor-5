/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent pt-8 md:pt-12 mt-16 md:mt-20 xl:mt-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Image
          src="https://i.ibb.co/RQmRxDg/Frame-1000008324-1.png" // Replace with your local image path
          height={120}
          width={200}
          alt="footer logo"
          className="mb-12 -mt-12"
          data-aos="fade-down" // AOS animation
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3" data-aos="fade-up">
            <h2 className="text-[#E4D4C8] text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
              Matthew Davidson
            </h2>
            <p className="text-base md:text-lg text-[#E4D4C8] mt-4">
              A Real Estate Professional, top performing agent with 15 years of
              NYC real estate experience, exceptional service and expert
              guidance for all your real estate needs.
            </p>
            <h3 className="text-[#E4D4C8] text-2xl md:text-3xl mt-8 font-normal leading-tight font-merriweather">
              Contact Us
            </h3>
            <address className="mt-6 space-y-4 md:space-y-6 text-[#E0D7C7] text-base not-italic">
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="https://i.ibb.co/L5D8wtQ/Mask-group-23.png"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4 hover:text-[#f6f3f3] cursor-pointer">
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="https://i.ibb.co/7kQ7Kpy/Mask-group-30.png"
                    alt="Email"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4 hover:text-[#f6f3f3] cursor-pointer">
                  matthew.davidson@xyzrealty.com
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#E4D4C8] p-1 rounded">
                  <Image
                    src="https://i.ibb.co/9yysvG0/Mask-group-31.png"
                    alt="Location"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4 hover:text-[#f6f3f3] cursor-pointer">
                  1234 Broadway, New York, NY 10001
                </span>
              </div>
            </address>
          </div>

          {/* Middle Section */}
          <nav className="w-full lg:w-1/3 lg:px-8" data-aos="fade-right">
            <h2 className="text-[#E4D4C8] text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
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
            <h2 className="text-[#E4D4C8] text-2xl md:text-3xl font-normal leading-tight md:leading-snug text-center font-merriweather">
              Contact Us
            </h2>
            <form className="mt-4 space-y-4 text-base md:text-base">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
              />
              <textarea
                placeholder="Type Your Message ..."
                className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full p-1.5 bg-[#E4D4C8] text-accent text-lg rounded-md  hover:bg-[#f6f3f3] transform transition-transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#E4D4C8] py-4 mt-20">
        <div className="max-w-[1420px] mx-auto px-4 grid-cols-1 grid lg:grid-cols-3 items-center lg:justify-between">
          <ul className="flex gap-x-2 px-1">
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className="text-secondary text-xl ">
                <Image
                  src="https://i.ibb.co/RcgMwDm/Frame-456.png"
                  height={32}
                  width={32}
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className="text-secondary text-xl ">
                <Image
                  src="https://i.ibb.co/NS9qWnT/Frame-457.png"
                  height={32}
                  width={32}
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="transform transition-transform hover:scale-110">
              <a href="#" className="text-secondary text-xl ">
                <Image
                  src="https://i.ibb.co/zs4RCS5/Frame-458.png"
                  height={32}
                  width={32}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
          <div className="lg:text-center text-left mt-6 lg:mt-0">
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
