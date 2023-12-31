import React from "react";

function Hero(){
    return(
      <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Empowering Children and Women
            
          </h1>
          <p class="mb-8 leading-relaxed">We are on a mission transforming lives of countless children by not just providing them shelter, Provisioning quality education, freedom to pursue dreams and lead a healthy dignified life.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-buttonoutline bg-transparent border-solid border-2 border-buttonoutline py-2 px-6 rounded text-lg">Support Us</button>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="chld.png"/>
        </div>
      </div>
    </section>
    );
}

export default Hero;