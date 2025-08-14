import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Giving = () => {
  return (
    <section className="relative fluid-container pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32">
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-16 py-20">
        <div className="relative overflow-hidden rounded-xl w-full h-96 lg:w-2/5 lg:h-[48rem]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/giving-exp.jpg"
              alt="Giving Experience"
              fill
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-[40%] lg:py-20 flex flex-col items-start lg:items-center">
          <h2 className="text-current self-start font-bold text-6xl lg:text-8xl xl:text-10xl leading-none tracking-tighter">
            Giving
          </h2>

          <div className="prose max-w-none mb-14">
            <p className="text-black leading-snug text-lg tracking-wide mt-0 mb-8 last:mb-0 "></p>

            <p className="mb-4">
              We believe Jesus is a giver and not a taker. Not only has He given
              us life and breath, but by His death and resurrection, He defeated
              the sin that would rob us of both. So, when it comes to giving, we
              believe percentages are a thing of the past, and obligation is the
              wrong approach.{" "}
            </p>

            <p>
              Giving is worship—and our worship is a response to the extravagant
              grace and glory of God.
            </p>
          </div>

          <div className="relative inline-flex w-full">
            <Button
              variant="default"
              className="inline-flex bg-sky-400 text-black hover:bg-white w-full font-sans leading-none text-lg tracking-tight py-7 px-14 rounded-4xl items-center justify-center gap-4 transition whitespace-nowrap select-none cursor-pointer"
            >
              Give Now
            </Button>
          </div>

          <div className="flex justify-center items-center gap-5 mt-6">
            <div className="relative inline-flex w-full">
              <Button
                variant="default"
                className="inline-flex bg-default border-2 border-gray-300 text-black hover:border-sky-400 font-mono leading-none uppercase text-sm py-3 px-2 lg:px-6 rounded-3xl items-center justify-center transition whitespace-nowrap select-none cursor-pointer hover:text-blue-500"
              >
                Additional Giving Options
              </Button>
            </div>

            <div className="relative inline-flex w-full">
              <Button
                variant="default"
                className="inline-flex bg-black text-white hover:bg-[#e2e3da] py-3 px-2 lg:px-6 hover:text-blue-500 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-nowrap select-none cursor-pointer"
              >
                Returning Givers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giving;
