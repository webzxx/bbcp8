import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="fluid-container relative">
      <div className="bg-[#e2e3da] rounded-2xl bg-tan px-6 sm:px-12 lg:px-0 flex flex-col-reverse lg:flex-row justify-center items-start">
        {/* Column 1 */}
        <div className="w-full lg:w-9/20 relative lg:-translate-y-10 pb-10 lg:pb-0">
          <h1 className="text-current font-headline-sans font-bold text-6xl lg:text-8xl xl:text-10xl leading-none tracking-tightest mb-3">
            Join Us
          </h1>

          <div className="lg:px-16">
            <h2 className=" text-current font-headline text-5xl lg:text-6xl xl:text-7.5xl tracking-tightest mb-3 leading-negative ">
              in <span className="not-italic font-normal">Church</span>{" "}
              <em>Onsite</em>
            </h2>
            <p className="text-gray-800 leading-snug text-lg tracking-wide mt-0 mb-8 last:mb-0 prose max-w-full lg:max-w-sm">
              Join us every Sunday at 9:30am for our Sunday Service Gatherings
              at Bible Baptist Church, Project 8, Quezon City.
            </p>
            <button className="bg-sky-400 hover:bg-sky-500 text-black text-lg font-medium px-6 py-3 rounded-full w-fit cursor-pointer">
              Watch Online
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex w-full lg:w-9/20 aspect-square -translate-y-10">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <Image
              src="/cta-img.jpg"
              alt="Church Service"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
