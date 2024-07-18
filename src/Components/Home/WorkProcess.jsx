/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const WorkProcess = () => {
  return (
    <div className=" mx-auto  pb-28">
      <Image
        src="https://i.ibb.co/Jvgn7sT/Line-27.png"
        height={15}
        width={1920}
        alt=""
        className="mb-28"
      />
      {/* Header section */}
      <header className="flex items-center  justify-center gap-10 mb-20">
        <div
          data-aos="fade-right"
          className="bg-accent hidden lg:block w-[233px] h-[3px]"
        ></div>
        <div>
          <h1
            data-aos="fade-up"
            className="font-normal text-sm text-center lg:text-start"
          >
            How we work
          </h1>
          <p
            data-aos="fade-up"
            className="font-bold text-center lg:text-start text-5xl text-accent mt-3"
          >
            Work Process
          </p>
        </div>
      </header>
      <div className="space-y-0 max-w-screen-xl mx-auto">
        {/* Step 1 */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center mr-8">
            <div className=" bg-[#1D304B] rounded w-12 h-12 flex items-center justify-center text-4xl font-bold text-neutral">
              1
            </div>{" "}
            <div className="w-px bg-accent flex-grow "></div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-accent">
              Initial Consultation and Needs Assessment
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-accent">
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />{" "}
                Contact and Schedule Consultation
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Understanding Client's Goals
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Market Analysis and Strategy Development
              </li>
            </ul>
            <button className="mt-6 mb-16 ml-6 text-xl text-accent px-6 py-2 border border-accent rounded-lg">
              See Details
            </button>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center mr-8">
            <div className=" bg-[#1D304B] rounded w-12 h-12 flex items-center justify-center text-4xl font-bold text-neutral">
              2
            </div>{" "}
            <div className="w-px bg-accent flex-grow "></div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-accent">
              Initial Consultation and Needs Assessment
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-accent">
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />{" "}
                Contact and Schedule Consultation
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Understanding Client's Goals
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Market Analysis and Strategy Development
              </li>
            </ul>
            <button className="mt-6 mb-16 ml-6 text-xl text-accent px-6 py-2 border border-accent rounded-lg">
              See Details
            </button>
          </div>
        </div>
        {/* Step 23 */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center mr-8">
            <div className=" bg-[#1D304B] rounded w-12 h-12 flex items-center justify-center text-4xl font-bold text-neutral">
              3
            </div>{" "}
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-accent">
              Initial Consultation and Needs Assessment
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-accent">
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />{" "}
                Contact and Schedule Consultation
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Understanding Client's Goals
              </li>
              <li className="flex items-center gap-2 text-xl">
                {" "}
                <Image
                  src="https://i.ibb.co/GQ7JyTh/checkmark-square-01-1.png/"
                  height={28}
                  width={28}
                  alt=""
                />
                Market Analysis and Strategy Development
              </li>
            </ul>
            <button className="mt-6 mb-16 ml-6 text-xl text-accent px-6 py-2 border border-accent rounded-lg">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
