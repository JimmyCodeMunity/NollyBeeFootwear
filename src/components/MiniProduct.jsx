import React from "react";
import { shoes } from "../constants";

const MiniProduct = () => {
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />

      <div class="antialiased text-gray-900 ">
        <div class="bg-gray-200 p-8 flex md:flex-row flex-col items-center justify-center md:space-x-10 space-y-3">
          {
            shoes.map((shoe)=>{
                return(
                    <div class="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
            {/* <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>--> */}
            <img
              class="h-60 w-full object-cover object-end"
              src={shoe.image}
              alt="Home in Countryside"
            />
            <div class="p-6">
              <div class="flex items-baseline">
                <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  New
                </span>
                <div class="ml-2 text-gray-600 text-xs lowercase font-semibold tracking-wide">
                  color:{shoe.color} &bull; sizes:{shoe.size}
                </div>
              </div>
              <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
                {shoe.name}
              </h4>

              <div class="mt-1">
                <span>kshs.{shoe.price}</span>
                <span class="text-gray-600 text-sm"></span>
              </div>
              <div class="mt-2 flex items-center">
                <div class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span></span>
                  </span>
                  <span class="ml-2 text-gray-600 text-sm">34 reviews</span>
                </div>
              </div>
            </div>
          </div>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
