import React from "react";
import Image from "next/image";

const Insights = () => {
  const articles = [
    {
      id: 1,
      author: "Robert Pattinson",
      date: "20 May, 2016",
      views: "1.3K",
      title: "Understanding the Real Estate Market Trends in 2016",
      image: "/Images/Blogs/Blog1_Banner.webp",
      excerpt:
        "Stay Ahead in 2016: Key Insights and Predictions for Navigating the Ever-Changing Real Estate Market Landscape. Do check quickly.",
    },
    {
      id: 2,
      author: "Pedri Alcarez",
      date: "17 May, 2016",
      views: "1.1K",
      title: "How to Stage Your Home for a Sale",
      image: "/Images/Blogs/Blog2_Banner.png",
      excerpt:
        "Simple and Effective Staging Techniques to Make Your Home Irresistible to Buyers and Speed Up the Selling Process",
    },
    {
      id: 3,
      author: "Lamin Yamal",
      date: "09 May, 2016",
      views: "1.5K",
      title: "Home Staging: Tips for a Stunning Sale",
      image: "/Images/Blogs/Blog3_Banner.png",
      excerpt:
        "Expert advice to navigate the complexities and make informed decisions when purchasing home first time.",
    },
    {
      id: 4,
      author: "Fermin Lopez",
      date: "01 May, 2016",
      views: "1.2K",
      title: "Home Staging: Tips for a Stunning Sale",
      image: "/Images/Blogs/Blog4_Banner.png",
      excerpt:
        "Elevate Home's Appeal with Expert Staging Techniques: Transform Spaces, Attract Buyers & Maximize Sale Potential.",
    },
  ];

  // Function to truncate text
  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)} ...` : text;
  };

  return (
    <section className="mx-auto px-4 py-28 md:p-8 md:py-36 xl:py-40">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 pb-4 md:p-8 mb-16 md:mb-20 xl:mb-16">
        <header className="flex items-center justify-center gap-10">
          <div
            data-aos="fade-right"
            className="bg-accent hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div data-aos="fade-up">
            <h1 className="font-normal text-sm text-center lg:text-start">
              Blog
            </h1>
            <p className="font-bold font-source-serif-pro text-center lg:text-start text-4xl md:text-5xl text-accent mt-1 xl:mt-3">
              Latest Insights
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

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Featured Article */}
        <article className="flex-1" data-aos="fade-up">
          <Image
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-auto rounded-lg"
            width={600}
            height={400}
          />
          <div className="mt-8">
            <div className="flex gap-8 text-sm text-[#201A1ECC]">
              <p className="flex items-center gap-2">
                <Image
                  src="/Images/Blogs/user_Icon.png"
                  alt="Author"
                  width={16}
                  height={16}
                />{" "}
                {articles[0].author}
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/Images/Blogs/clander.png"
                  alt="Date"
                  width={16}
                  height={16}
                />{" "}
                {articles[0].date}
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/Images/Blogs/like_Icon.png"
                  alt="Views"
                  width={16}
                  height={16}
                />{" "}
                {articles[0].views}
              </p>
            </div>

            <h3 className="text-2xl mt-4 font-semibold text-accent font-source-serif-pro">
              {articles[0].title}
            </h3>
            <p className="mt-2 text-[#201A1ECC]">{articles[0].excerpt}</p>
            <button className="mt-2 font-montserrat  text-primary font-medium underline underline-offset-4 text-base">
              Read More
            </button>
          </div>
        </article>

        {/* Smaller Articles */}
        <div className="flex-1 flex flex-col gap-6">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="sm:w-40 sm:h-40 w-full rounded-lg object-cover"
                width={225}
                height={225}
              />
              <div>
                <div className="text-[#201A1ECC] flex gap-6 text-sm">
                  <p className="flex items-center gap-2">
                    <Image
                      src="/Images/Blogs/user_Icon.png"
                      alt="Author"
                      width={16}
                      height={16}
                    />{" "}
                    {article.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/Images/Blogs/clander.png"
                      alt="Date"
                      width={16}
                      height={16}
                    />{" "}
                    {article.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/Images/Blogs/like_Icon.png"
                      alt="Views"
                      width={16}
                      height={16}
                    />{" "}
                    {article.views}
                  </p>
                </div>
                <h3 className="text-xl font-source-serif-pro mt-2 font-semibold text-accent">
                  {article.title}
                </h3>
                <p className="mt-2 text-[#201A1ECC]">
                  {truncateText(article.excerpt)}
                </p>
                <button className="mt-2 font-montserrat  text-primary font-medium underline underline-offset-4 text-base">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
