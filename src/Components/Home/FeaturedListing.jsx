"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import "aos/dist/aos.css";

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
    image: "/Images/Featured/Featured1_Image.webp",
  },
  {
    id: 2,
    price: "$8,50,565",
    type: "Buy",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "/Images/Featured/Featured2_Image.png",
  },
  {
    id: 3,
    price: "$8,50,565",
    type: "Buy",
    name: "Mediterean Sealine Cottage",
    location: "12/A House, 42 Kennedy Road, New York",
    beds: 3,
    baths: 2,
    size: "1980 Sq-meter",
    image: "/Images/Featured/Featured1_Image.webp",
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
    <div id="listing" className="mx-auto px-4 py-28 md:p-8 md:py-36 xl:py-40">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center max-w-screen-xl mx-auto pb-4 mb-16 md:mb-20 xl:mb-24">
        <header className="flex items-center justify-center gap-10">
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
              className="font-bold font-source-serif-pro text-center lg:text-start text-4xl md:text-5xl text-accent mt-1 xl:mt-3"
            >
              Featured Listing
            </p>
          </div>
        </header>

        <button
          data-aos="fade-left"
          className="bg-primary px-6 py-2 rounded text-neutral text-xl transition-all duration-300 ease-in-out hover:bg-[#861E32] hover:text-neutral hover:shadow-lg"
        >
          See All
        </button>
      </div>

      {/* Tabs */}
      <Tabs
        selectedIndex={currentTab}
        onSelect={(index) => setCurrentTab(index)}
        className="mb-10"
      >
        <div className="md:mb-16 mb-10 flex justify-center">
          <TabList
            data-aos="fade-up"
            className="flex space-x-2 md:gap-y-4 gap-y-2 flex-wrap"
          >
            {["All", "Sell", "Buy", "Rent"].map((tab, index) => (
              <Tab
                key={index}
                className="px-4 py-2 font-medium text-accent rounded cursor-pointer text-sm md:text-xl border-none hover:bg-[#E4D4C8]"
                selectedClassName="bg-[#E4D4C8]"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {listings.map((listing) => (
            <div key={listing.id} className="keen-slider__slide">
              <div
                className="grid md:grid-cols-2 bg-[#f2e8e4] rounded-xl shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <Image
                  src={listing.image}
                  alt={listing.name}
                  width={260}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 lg:p-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#970909] font-source-serif-pro text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-semibold">
                      {listing.price}
                    </span>
                    <button className="px-3 py-1 bg-primary font-montserrat text-white text-sm rounded-lg">
                      {listing.type}
                    </button>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-source-serif-pro  mb-2">
                    {listing.name}
                  </h3>
                  <div className="text-[#201A1ECC] text-base lg:text-lg xl:text-sm 2xl:text-lg flex items-start gap-2 mb-3 ">
                    <Image
                      onClick={() => instanceRef.current.prev()}
                      src="/Images/Featured/location_Icon.png"
                      height="23"
                      width="23"
                      alt="Location"
                      className="mt-1"
                    />
                    {listing.location}
                  </div>
                  <div className="flex space-x-4 border-t border-primary pt-2">
                    <span className="text-primary text-base lg:text-lg xl:text-sm 2xl:text-lg">
                      {listing.beds} Bed
                    </span>
                    <span className="text-primary text-base lg:text-lg xl:text-sm 2xl:text-lg">
                      {listing.baths} Bath
                    </span>
                    <span className="text-primary text-base lg:text-lg xl:text-sm 2xl:text-lg">
                      {listing.size}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <Image
            data-aos="zoom-in"
            onClick={() => instanceRef.current.prev()}
            src="/Images/Featured/left_Arrow.webp"
            height="50"
            width="50"
            alt="Previous"
            className="cursor-pointer rounded-full transition-transform transform hover:scale-110 w-auto h-8 sm:h-12"
          />
          <Image
            data-aos="zoom-in"
            onClick={() => instanceRef.current.next()}
            src="/Images/Featured/right_arrow.webp"
            height="50"
            width="50"
            alt="Next"
            className="cursor-pointer rounded-full transition-transform transform hover:scale-110 w-auto h-8 sm:h-12"
          />
        </div>
      </Tabs>
    </div>
  );
};

export default FeaturedListing;
