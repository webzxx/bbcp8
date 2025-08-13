import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="fluid-container overflow-hidden 2xl:overflow-visible pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32"
    >
      <div className="bg-[#e2e3da] rounded-3xl px-6 py-12 xl:px-12 2xl:py-0">
        <h1 className="text-black font-bold text-6xl lg:text-7xl 2xl:text-9xl leading-none tracking-tighter -translate-y-0 2xl:-translate-y-10 2xl:-translate-x-12">
          Our Leadership
        </h1>

        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center py-8 gap-4">
            <div className="w-full lg:w-1/2 lg:px-16">
              <p className="text-black font-mono uppercase text-xs leading-none text-opacity-50 mb-3">
                Global Pastor
              </p>

              <p className="text-current font-headline-sans font-bold text-2xl lg:text-3xl tracking-tight leading-tighter mb-4">
                Pastor Ansel Lucena
              </p>

              <div className="max-w-none pb-12 !text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                soluta aspernatur modi nisi beatae explicabo sapiente, facere
                magnam! Optio expedita soluta esse dicta. Accusamus harum ab
                beatae saepe corporis laboriosam.
              </div>

              <div className="">
                <Button
                  variant="default"
                  className=" inline-flex bg-sky-400 text-black hover:bg-charcoal hover:text-white py-3 px-6 mb-4 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-no-wrap group select-none cursor-pointer "
                >
                  See our Leadership
                </Button>
              </div>
            </div>

            <div className="relative flex justify-between items-center w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 w-full h-full ">
                <Image
                  src="/pastor-img.jpg"
                  alt="Pastor Ansel Lucena"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
