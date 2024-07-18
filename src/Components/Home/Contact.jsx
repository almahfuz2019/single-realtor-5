/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div
      className="py-28 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://i.ibb.co/Qjh54DW/Rectangle-3894.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-2 max-w-screen-xl mx-auto gap-10">
        <div className="w-full  px-4 flex flex-col items-center">
          <h1 className="text-5xl leading-[60px] text-center font-medium mb-3 text-neutral">
            Don't miss out on best rentals! Schedule a showing now.
          </h1>
          <p className="mb-6   text-xl text-center text-[#E4D4C8]">
            Take the first step to your new home - Apply online today.
          </p>
          <a
            href="#"
            className="w-auto mt-10 rounded-md lg:rounded-xl bg-neutral text-accent px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-3 text-lg md:text-xl lg:text-2xl font-medium  shadow transition-transform duration-300 ease-in-out transform    hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#f5d9bc] hover:to-[#d4aa7f]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 montserrat-font"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Contact Me
          </a>
        </div>
        <div></div>
        <div></div>
        <div className="w-full  px-4 flex flex-col items-center mt-12 lg:mt-0">
          <h2 className="text-5xl leading-[60px] text-neutral text-center font-medium mb-3 ">
            Stay Informed: Subscribe to Our Newsletter
          </h2>
          <p className="mb-6   text-xl text-center text-[#E4D4C8CC]">
            To get Latest News, Market Insights, and Exclusive Listings!
          </p>
          <div className="flex w-full max-w-screen-sm mt-10">
            <input
              type="email"
              placeholder="Type Your Email ..."
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none bg-neutral text-accent placeholder:text-accent"
              aria-label="Email for newsletter"
            />
            <button className="bg-[#1D304B]  text-neutral font-medium py-3 px-6 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
