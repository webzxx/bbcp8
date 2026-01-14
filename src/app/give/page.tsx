import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Give() {
  return (
    <section id="hero" className="fluid-container">
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/5 relative z-10">
          <div className="text-current font-headline-sans font-bold text-6xl lg:text-8xl xl:text-[9.5rem] leading-none tracking-tighter mb-3">
            Heartbeat
          </div>

          <div className="lg:px-8 xl:px-16">
            <h2 className="text-current font-headline text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-3 leading-none">
              of Generosity
            </h2>

            <p className="text-gray-800 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 prose max-w-full lg:max-w-sm">
              God is moving in powerful ways in our midst. Thank you for being a
              part of all that He is doing in and through our House in these
              days.
            </p>

            <div className="mt-8">
              <p className="text-start">
                <Button
                  variant="default"
                  className="inline-flex bg-sky-400 text-black hover:bg-[#e2e3da] py-7 px-12 hover:text-sky-400 font-sans leading-none tracking-tighter text-lg rounded-4xl gap-4 items-center justify-center transition whitespace-nowrap group select-none cursor-pointer"
                >
                  Give Online
                </Button>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-80 md:h-140 lg:w-3/5 lg:min-h-lgplus relative overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/give-hero.jpg"
                alt="Give Hero"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
