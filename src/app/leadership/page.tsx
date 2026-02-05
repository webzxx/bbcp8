import Image from "next/image";

export default function OurLeadership() {
  return (
    <section
      id="hero"
      className="fluid-container relative grid w-full min-h-screen pb-8"
    >
      <div className="relative z-0 w-full max-w-screen-3xl h-full mx-auto">
        <div className=" flex justify-center items-end sm:justify-end relative z-0 w-full h-full px-6 md:px-16 rounded-2xl overflow-hidden ">
          <div className="absolute inset-0 bg-neutral-800 rounded-2xl overflow-hidden translate-none transform translate-x-0 translate-y-0 rotate-0 scale-100"></div>

          <div className="absolute inset-0 rounded-2xl overflow-hidden translate-none transform translate-x-0 translate-y-0 rotate-0 scale-none">
            <div className="absolute inset-0 bg-neutral-700 rounded-2xl overflow-hidden opacity-1">
              <div>
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src="/leadership-hero.jpg"
                    alt="Leadership Hero"
                    fill
                    className="absolute inset-0 w-full h-full object-cover translate-none transform translate-x-0 translate-y-0 scale-110"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-primary rounded-2xl overflow-hidden translate-none transform translate-x-0 -translate-y-[101%]"></div>
          </div>

          <div className="relative w-full sm:w-21 bg-black/30 md:bg-white backdrop-blur will-change-filter rounded-t-1.5xl -mb-px p-8 translate-none transform translate-x-0 translate-y-0 rotate-0 scale-none">
          <h2 className="text-white md:text-black font-headline-sans font-bold text-2xl lg:text-3xl tracking-tighter leading-tighter mb-3">
            <div className="overflow-hidden block align-start relative">
            </div>
          </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
