"use client";
import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto  py-28">
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
            Services
          </h1>
          <p
            data-aos="fade-up"
            className="font-bold text-center lg:text-start text-5xl text-accent mt-3"
          >
            What We Provide
          </p>
        </div>
      </header>
      <Tabs>
        <div className="mb-4 flex justify-center">
          <TabList className="flex space-x-4">
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Buy Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Sell Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Rent Property
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Home Evaluation
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              Mortgage Calculator
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-gray-700  rounded-[32px] cursor-pointer hover:bg-primary hover:text-white"
              selectedClassName="bg-primary text-white"
            >
              New Buyers Guideline
            </Tab>
          </TabList>
        </div>

        <TabPanel className="bg-[#E4D4C8] p-10 rounded-2xl">
          <div className="lg:flex items-end lg:space-x-8">
            <div className="flex items-end gap-4 mb-4 lg:mb-0">
              <div className="row-span-2">
                <Image
                  src="https://i.ibb.co/B3bbSHh/Rectangle-3889.png"
                  alt="Signing Documents"
                  className="rounded-[32px] "
                  width={359}
                  height={502}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Image
                  src="https://i.ibb.co/S5tZ3w4/Rectangle-3890.png"
                  alt="Home Evaluation"
                  className="rounded-[32px] "
                  width={200}
                  height={200}
                />{" "}
                <Image
                  src="https://i.ibb.co/jWV5YZG/Rectangle-3891.png"
                  alt="Living Room"
                  className="rounded-[32px] "
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-3xl font-semibold mb-4">Home Evaluation</h3>
              <p className="text-[#201A1ECC] text-xl mb-6">
                Comprehensive and Accurate Property Valuations: Gain Insights
                into Your Home's Market Value with Our Expert Evaluations. We
                Provide Detailed Assessments to Help You Make Informed Decisions
                Whether You're Planning to Sell, Refinance, or Simply Curious
                About Your Property's Worth.
              </p>
              <button className="px-6 py-2 text-xl text-white bg-primary rounded-[32px]">
                Evaluate
              </button>
            </div>
          </div>
        </TabPanel>
        {/* Add content for other tabs in similar TabPanel blocks */}
        <TabPanel>
          <div>Content for Buy Property</div>
        </TabPanel>
        <TabPanel>
          <div>Content for Sell Property</div>
        </TabPanel>
        <TabPanel>
          <div>Content for Rent Property</div>
        </TabPanel>
        <TabPanel>
          <div>Content for Mortgage Calculator</div>
        </TabPanel>
        <TabPanel>
          <div>Content for New Buyers Guideline</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;
