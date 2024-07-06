import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/companies";
import MiniProduct from "../components/MiniProduct";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Stats from "../components/Stats";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div id="" className="bg-transparent w-full overflow-hidden">
      <div id="home">
        <div className="flex px-6 sm:px-16 justify-center items-center bg-transparent text-white">
          <div className="w-full xl:max-w-[1280px]">
            <Navbar />
          </div>
        </div>

        {/* hero section */}

        <div>
          <Hero />
        </div>
      </div>
      <Stats />
      <MiniProduct />
      <Services/>
      <Subscribe />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default HomePage;
