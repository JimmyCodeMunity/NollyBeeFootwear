import React from "react";

const Hero = () => {
  return (
    <section
      id="hoe"
      className="bg-transparent flex-1 flex-col py-6 sm:py-16 w-full"
    >
      <div className="flex-1 md:py-20 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-8">
        <h1 className="text-4xl font-bold text-white sm:text-[40px] sm:leading-[1.1]">
          "Step Up your Style With Our Trendy Shoes"
        </h1>
        <p className="mt-4 text-sm text-gray-500 sm:text-base">
          We do sell and deliver shoes to your location.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-purple-500 px-10 py-3 text-white font-semibold rounded-2xl hover:bg-purple-400 transition-all duration-300"
          >
            Visit Shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
