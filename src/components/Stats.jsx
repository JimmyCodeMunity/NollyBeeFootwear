import React from "react";

const Stats = () => {
  return (
    <div className="bg-white">
      <section class="bg-white">
        <div class="px-4 py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6 xl:px-0">
          <div class="mx-auto mb-8 max-w-screen-md text-center md:mb-16">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl">
              Trusted around the world
            </h2>
          </div>
          <div class="mb-4 space-y-4 md:grid md:grid-cols-3 md:gap-4 xl:gap-16 md:space-y-0 md:mb-8">
            <div class="flex justify-center items-center p-6 text-center bg-gray-100 rounded xl:p-12 ">
              <div class="text-gray-900">
                <p class="mb-2 text-4xl font-extrabold md:text-5xl">24,837</p>
                <h3 class="mb-2 text-xl font-semibold">Interactions</h3>
                <p class="font-light text-gray-500">
                  Engagements recorded
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center p-6 text-center bg-gray-100 rounded xl:p-12">
              <div class="text-gray-900">
                <p class="mb-2 text-4xl font-extrabold md:text-5xl">590</p>
                <h3 class="mb-2 text-xl font-semibold">Enterprise Clients</h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Served
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center p-6 text-center bg-gray-100 rounded xl:p-12">
              <div class="text-gray-900">
                <p class="mb-2 text-4xl font-extrabold md:text-5xl">1,234</p>
                <h3 class="mb-2 text-xl font-semibold">Active Users</h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  On our platform
                </p>
              </div>
            </div>
          </div>
          <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
            Last updated at Feb. 29, 2024, 7:12 p.m.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Stats;
