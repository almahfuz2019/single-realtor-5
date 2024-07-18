import React from "react";
import Image from "next/image";

const Insights = () => {
  const articles = [
    {
      id: 1,
      author: "Robert Pattinson",
      date: "20 May, 2024",
      views: "1.3K",
      title: "Understanding the Real Estate Market Trends in 2024",
      image: "https://i.ibb.co/JvkVwQb/Rectangle-3897.png",
      excerpt:
        "Stay Ahead in 2024: Key Insights and Predictions for Navigating the Ever-Changing Real Estate Market Landscape. Do check quickly.",
    },
    {
      id: 2,
      author: "Pedri Alcarez",
      date: "17 May, 2024",
      views: "1.1K",
      title: "How to Stage Your Home for a Quick Sale",
      image: "https://i.ibb.co/JvkVwQb/Rectangle-3897.png",
      excerpt:
        "Simple and Effective Staging Techniques to Make Your Home Irresistible to Buyers and Speed Up the Selling Process",
    },
    {
      id: 3,
      author: "Lamin Yamal",
      date: "09 May, 2024",
      views: "1.5K",
      title: "Home Staging: Tips for a Stunning Sale",
      image: "https://i.ibb.co/JvkVwQb/Rectangle-3897.png",
      excerpt:
        "Expert advice to navigate the complexities and make informed decisions when purchasing home first time.",
    },
    {
      id: 4,
      author: "Fermin Lopez",
      date: "01 May, 2024",
      views: "1.2K",
      title: "Home Staging: Tips for a Stunning Sale",
      image: "https://i.ibb.co/JvkVwQb/Rectangle-3897.png",
      excerpt:
        "Elevate Home's Appeal with Expert Staging Techniques: Transform Spaces, Attract Buyers & Maximize Sale Potential.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 ">
      <div className="flex justify-between items-center  mb-6">
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
              Blog
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold text-center lg:text-start text-5xl text-accent mt-3"
            >
              Latest Insights
            </p>
          </div>
        </header>
        <button className=" bg-primary px-6 py-2 rounded-lg text-neutral">
          See All
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-10  ">
        {/* Featured Article */}
        <div className="flex-1">
          <Image
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-auto rounded-lg"
            width={600}
            height={400}
          />
          <div className="mt-4">
            <div className="text-[#201A1ECC] flex gap-10">
              <p className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/HKpCWWx/image-108.png"
                  height={24}
                  width={24}
                  alt=""
                />{" "}
                {articles[0].author}
              </p>{" "}
              <p className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/HKpCWWx/image-108.png"
                  height={24}
                  width={24}
                  alt=""
                />{" "}
                | {articles[0].date}{" "}
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/HKpCWWx/image-108.png"
                  height={24}
                  width={24}
                  alt=""
                />{" "}
                | {articles[0].views}
              </p>
            </div>

            <h3 className="text-2xl mt-2 font-semibold text-accent">
              {articles[0].title}
            </h3>
            <p className="mt-2 text-[#201A1ECC]">{articles[0].excerpt}</p>
            <button className="mt-2 text-[#1D304B] underline underline-offset-4">
              Read More
            </button>
          </div>
        </div>
        {/* Smaller Articles */}
        <div className="flex-1 flex flex-col gap-6">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="flex gap-4">
              <Image
                src={article.image}
                alt={article.title}
                className="w-40 h-40 rounded-lg"
                width={225}
                height={225}
              />
              <div>
                <div className="text-[#201A1ECC] flex gap-10">
                  <p className="flex items-center gap-2">
                    <Image
                      src="https://i.ibb.co/HKpCWWx/image-108.png"
                      height={24}
                      width={24}
                      alt=""
                    />{" "}
                    {article.author}
                  </p>{" "}
                  <p className="flex items-center gap-2">
                    <Image
                      src="https://i.ibb.co/HKpCWWx/image-108.png"
                      height={24}
                      width={24}
                      alt=""
                    />{" "}
                    | {article.date}{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="https://i.ibb.co/HKpCWWx/image-108.png"
                      height={24}
                      width={24}
                      alt=""
                    />{" "}
                    | {article.views}
                  </p>
                </div>
                <h3 className="text-2xl mt-2 font-semibold text-accent">
                  {article.title}
                </h3>
                <p className="mt-2 text-[#201A1ECC]">{article.excerpt}</p>
                <button className="mt-2 text-[#1D304B] underline underline-offset-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
