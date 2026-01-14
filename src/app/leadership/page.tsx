import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurLeadership() {
  return (
    <section id="hero" className="fluid-container">
      <div className="relative z-0 w-full max-w-screen-3xl h-full mx-auto px-6 md:px-10">
        <div className="flex justify-center items-end sm:justify-end relative z-0 w-full h-full px-6 md:px-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-neutral-800 rounded-2xl overflow-hidden"></div>

          <div className=" absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-neutral-700 rounded-2xl overflow-hidden"></div>
          </div>

          <div className="relative w-full sm:w-21 bg-black/30 md:bg-white backdrop-blur will-change-filter rounded-t-2xl -mb-px p-8">
            <h2 className="text-white md:text-black font-headline-sans font-bold text-2xl lg:text-3xl tracking-tighter leading-tighter mb-3">
              <div className="overflow-hidden relative block text-start">
                <div className="relative inline-block pb-[0.9%]">Our Leadership</div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
