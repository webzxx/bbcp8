import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative grid w-full min-h-screen">
      <div className="relative z-0 w-full max-w-[1680px] h-full mx-auto px-6 md:px-10">
        <div
          className="relative flex h-[calc(92vh-64px)] md:h-[calc(84vh-64px)] w-full items-center justify-start pl-2 md:pl-20 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/hero-banner.jpg')",
          }}
        >
          <div className="relative max-w-2xl">
            <h2 className=" text-white font-headline-sans font-bold text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-3 leading-tight ">
              <div className="block text-start relative overflow-hidden">
                <div className="relative inline-block pb-[0.9%]">For God.</div>
              </div>

              <div className="block text-start relative overflow-hidden">
                <div className="relative inline-block pb-[0.9%]">
                  For People.
                </div>
              </div>

              <div className="block text-start relative overflow-hidden">
                <div className="relative inline-block pb-[0.9%]">
                  For the City.
                </div>
              </div>

              <div className="block text-start relative overflow-hidden">
                <div className="relative inline-block pb-[0.9%]">
                  For the World.
                </div>
              </div>
            </h2>

            <div className="text-white leading-tight text-lg tracking-tighter mt-0 mb-8 last:mb-0 max-w-sm">
              <div className="block text-start relative overflow-hidden">
                <p className="relative inline-block font-semibold">
                  Welcome to a place where the gospel is central and Jesus is
                  always the lead story. We are a Jesus church and want to
                  gather in worship and scatter to shine His light and love
                  throughout the city and beyond.
                </p>
              </div>
            </div>

            <div className=" w-full items-center justify-start gap-6 flex-wrap flex relative z-10 ">
              <div className="relative inline-flex ">
                <Link href="/about">
                  <Button
                    variant="default"
                    className="inline-flex bg-sky-400 text-black hover:bg-white font-sans leading-none text-lg tracking-tighter py-7 px-14 rounded-4xl items-center justify-center gap-4 transition whitespace-nowrap select-none cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
