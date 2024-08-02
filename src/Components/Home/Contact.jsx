"use client"
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      reset();
    }, 3000);
  };

  return (
    <div
      id="contact"
      className="py-28 md:py-36 xl:py-40 flex items-center bg-fixed justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${"Images/ContactUs/ContactUs_Banner.png"})`,
      }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-screen-xl mx-auto">
        {/* Contact Section */}
        <div
          className="w-full px-4 flex flex-col items-center"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-medium mb-3 text-neutral text-center font-source-serif-pro">
            Don't miss out on the best rentals! Schedule a showing now.
          </h1>
          <p className="mb-6 text-base md:text-xl text-center text-[#E4D4C8]">
            Take the first step to your new home - Apply online today.
          </p>
          <a
            href="#footer"
            className="px-6 py-2 text-[#201A1E] xl:px-5 xl:py-2 2xl:px-6 2xl:py-3 xl:text-xl 2xl:text-2xl font-roboto bg-neutral md:px-5 md:py-2.5 rounded-lg font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-[#861E32] hover:text-neutral hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
        <div className="hidden xl:block"></div>
        <div className="hidden xl:block"></div>
        {/* Newsletter Subscription Section */}
        <div
          className="w-full px-4 flex flex-col items-center mt-12 lg:mt-0"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl text-neutral text-center font-medium mb-3 font-source-serif-pro">
            Stay Informed: Subscribe to Our Newsletter
          </h2>
          <p className="mb-6 text-base md:text-xl text-center text-[#E4D4C8CC]">
            Get the latest news, market insights, and exclusive listings!
          </p>
          <form
            className="md:flex flex-col md:flex-row w-full max-w-screen-sm mt-6 gap-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Type Your Email ..."
              className={`flex-1 px-4 py-3 rounded-l-lg md:rounded-r-none focus:outline-none bg-neutral text-accent placeholder:text-accent ${
                errors.email ? "border-red-500" : ""
              }`}
              aria-label="Email for newsletter"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <button className="bg-[#1D304B] text-neutral font-medium md:py-3 py-3 px-4 md:px-6 rounded-r-lg md:rounded-l-none mt-2 md:mt-0 text-lg transition-all duration-300 ease-in-out hover:bg-[#861E32] border border-neutral font-montserrat">
              Subscribe
            </button>
          </form>
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
          {isSubscribed && (
            <div className="mt-4 text-green-500">
              You have subscribed successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
