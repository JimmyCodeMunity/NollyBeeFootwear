import React from "react";

const Services = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Boost Your Looks{" "}
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Enhance your looks with affordable shoes
            </p>
          </div>
          <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Advanced Analytics
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Track and analyze your products with powerful analytics tools. Gain
                valuable insights for better decision-making.
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Delivery services
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Make an order today and receive you package in the shortest time
                possible irregardless of your location
              </p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900">
                Security First
              </h3>
              <p class="mt-5 text-base text-gray-600">
                Your data and payments are all secured on our site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
