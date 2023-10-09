import React from "react";

function Gallery(){
    return(
        <section id="gallery" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-yellow-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Captured Moments of Love</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Discover the warmth, love, and resilience within our team. Our gallery is a collection of cherished moments that reflect the love, laughter, and hope we share with the children in our care. These snapshots of joy encapsulate the heart of our mission.</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://www.goeco.org/wp-content/uploads/2020/08/article-street-children-of-india3.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Moments of Pure Joy</h2>
        <p class="text-base leading-relaxed mt-2">A bond that transcends words - our dedicated volunteer and a cherished child sharing a moment of pure happiness. ❤️ #HeartfeltConnections</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://www.volunteerworkindia.org/wp-content/uploads/2017/04/Teaching-Volunteer-project-in-India.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Empowering Minds: A Global Impact</h2>
        <p class="text-base leading-relaxed mt-2">Education knows no boundaries. Our compassionate volunteer from afar, igniting young minds with knowledge and hope. 📚✨ #GlobalEducation</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dkprodimages.gumlet.io/campaign/3711/Divjeevan%20(1).jpg?format=webp&w=400&dpr=2.6"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Nourishing Hearts: A Helping Hand</h2>
        <p class="text-base leading-relaxed mt-2">Bringing smiles, one meal at a time. Our dedicated volunteer, spreading love and nourishment to our little heroes. ❤️ #TogetherForHope</p>
      </div>
    </div>
  </div>
</section>
    );
}

export default Gallery;