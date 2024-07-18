"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const listings = [
  {
    id: 1,
    price: "$8,50,565",
    type: "Buy",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "https://i.ibb.co/PQ1DRvV/Rectangle-3893.png",
  },
  {
    id: 2,
    price: "$1,200",
    type: "Rent",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "https://i.ibb.co/PQ1DRvV/Rectangle-3893.png",
  },
  {
    id: 2,
    price: "$1,200",
    type: "Rent",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "https://i.ibb.co/PQ1DRvV/Rectangle-3893.png",
  },
  {
    id: 2,
    price: "$1,200",
    type: "Rent",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "https://i.ibb.co/PQ1DRvV/Rectangle-3893.png",
  },
  // Add more listings as needed
];

const FeaturedListing = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  return (
    <div className=" mx-auto px-4  ">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto  mb-24">
        <header className="flex items-center   justify-center gap-10 ">
          <div
            data-aos="fade-right"
            className="bg-accent hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div>
            <h1
              data-aos="fade-up"
              className="font-normal text-sm text-center lg:text-start"
            >
              Condos
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold text-center lg:text-start text-5xl text-accent mt-3"
            >
              Featured Listing
            </p>
          </div>
        </header>
        <button className=" bg-primary px-6 py-2 rounded text-neutral">
          See All
        </button>
      </div>
      <Tabs
        selectedIndex={currentTab}
        onSelect={(index) => setCurrentTab(index)}
      >
        <div className="flex justify-center mb-4">
          <TabList className="flex space-x-4">
            <Tab
              className="px-4 py-2 text-sm font-medium text-accent bg-transparent rounded cursor-pointer hover:bg-neutral "
              selectedClassName="bg-[#E4D4C8]"
            >
              All
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-accent bg-transparent rounded cursor-pointer hover:bg-neutral "
              selectedClassName="bg-[#E4D4C8]"
            >
              Sell
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-accent bg-transparent rounded cursor-pointer hover:bg-neutral "
              selectedClassName="bg-[#E4D4C8]"
            >
              Buy
            </Tab>
            <Tab
              className="px-4 py-2 text-sm font-medium text-accent bg-transparent rounded cursor-pointer hover:bg-neutral "
              selectedClassName="bg-[#E4D4C8]"
            >
              Rent
            </Tab>
          </TabList>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {listings.map((listing) => (
            <div key={listing.id} className="keen-slider__slide">
              <div className="grid grid-cols-2 justify-start items-center  bg-[#f2e8e4] rounded-xl shadow-md overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.name}
                  width={260}
                  height={300}
                  className="w-full bg-cover h-[300px]"
                />
                <div className="p-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[#970909] text-2xl font-semibold">
                      {listing.price}
                    </span>
                    <button className="px-3 py-1 bg-primary  text-white text-sm rounded-lg">
                      {listing.type}
                    </button>
                  </div>
                  <h3 className="text-2xl mt-2">{listing.name}</h3>
                  <p className="text-[#201A1ECC]">{listing.location}</p>
                  <div className="flex space-x-4 mt-3 border border-primary border-x-0 border-b-0 pt-3">
                    <span className="text-[#1D304B]">{listing.beds} Bed</span>
                    <span className="text-[#1D304B]">{listing.baths} Bath</span>
                    <span className="text-[#1D304B]">{listing.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 items-center gap-4">
          <Image
            onClick={() => instanceRef.current.prev()}
            src="https://i.ibb.co/c6BWbKS/Frame-1000008071.png"
            height="50"
            width="50"
            alt="Previous"
            className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
          />

          <Image
            onClick={() => instanceRef.current.next()}
            src="https://i.ibb.co/1f270vg/Frame-1000008072.png"
            height="50"
            width="50"
            alt="Next"
            className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
          />
        </div>
      </Tabs>
    </div>
  );
};

export default FeaturedListing;
