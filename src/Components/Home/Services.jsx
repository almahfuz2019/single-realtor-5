/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Services = () => {
  return (
    <div
      id="services"
      className="max-w-screen-xl mx-auto  px-4 py-28 md:p-8 md:py-36 xl:py-40 "
    >
      {/* Header section */}
      <header className="flex items-center justify-center gap-10 mb-16 md:mb-20 xl:mb-24">
        <div
          data-aos="fade-right"
          className="bg-accent hidden lg:block w-[233px] h-[3px]"
        ></div>
        <div>
          <h1
            data-aos="fade-up"
            className="font-normal text-sm text-center lg:text-start"
          >
            Services
          </h1>
          <p
            data-aos="fade-up"
            className="font-bold text-center font-source-serif-pro  lg:text-start text-4xl md:text-5xl text-accent mt-1 xl:mt-3"
          >
            What We Provide
          </p>
        </div>
      </header>
      <Tabs data-aos="fade-up">
        <div className="md:mb-16 mb-10 flex justify-center ">
          <TabList className="flex space-x-4 md:gap-y-4 gap-y-2 flex-wrap">
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary border xl:border-none border-gray-700 hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Buy Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary border xl:border-none border-gray-500 hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Sell Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  border-gray-500 rounded-[32px] cursor-pointer hover:bg-primary hover:text-white border xl:border-none"
              selectedClassName="bg-primary text-white"
            >
              Rent Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-500  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white border xl:border-none "
              selectedClassName="bg-primary text-white"
            >
              Home Evaluation
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-500  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white border xl:border-none "
              selectedClassName="bg-primary text-white"
            >
              Mortgage Calculator
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-500 rounded-[32px] cursor-pointer hover:bg-primary hover:text-white border xl:border-none"
              selectedClassName="bg-primary text-white"
            >
              New Buyers Guideline
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        {/* Repeat similar structure for other TabPanel blocks */}
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex bg-[#E4D4C8] p-4 md:p-10 rounded-2xl xl:flex-row flex-col gap-y-8  xl:items-end lg:space-x-14">
            <div className="flex flex-col md:flex-row items-end gap-4 mb-4 lg:mb-0 ">
              <div className="row-span-2 ">
                <Image
                  src="/Images/Services/Services_Image-1.webp"
                  alt="Signing Documents"
                  className="xl:rounded-[32px] rounded-2xl h-72 md:h-auto object-cover"
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex md:flex-col gap-5">
                <Image
                  src="/Images/Services/Services_Image-2.webp"
                  alt="Home Evaluation"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={200}
                />
                <Image
                  src="/Images/Services/Services_Image-3.webp"
                  alt="Living Room"
                  className="xl:rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4 font-source-serif-pro ">
                Home Evaluation
              </h3>
              <p className="text-[#201A1ECC] text-lg md:text-xl  mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-lg md:text-xl  text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-[#861E32]  hover:text-neutral hover:shadow-lg">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;
