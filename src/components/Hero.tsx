import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative grid w-full min-h-screen pb-8">
      <div className="relative z-0 w-full max-w-screen-2xl h-full mx-auto px-6 md:px-10">
        <div
          className="relative flex h-[calc(84vh-64px)] w-full items-center justify-center bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/hero-img.jpg')",
          }}
        >
          <div className="relative max-w-2xl">
            <div className="flex flex-col items-center text-center text-white font-headline-sans font-semibold text-5xl lg:text-6xl xl:text-7xl tracking-tightest mb-3 !leading-custom ">
              <p className="text-white text-5xl font-semibold leading-tight mb-4">
                Shine as lights in the world, holding forth the{" "}
                <span className="text-[#ad945e]">Word</span> of life
              </p>

              <h1 className="text-white text-2xl">Philippians 2:15-16</h1>

              <div className="mt-10">
                <Button
                  variant="outline"
                  className="text-lg px-12 py-8 rounded-full bg-[#00b7e3] border-none cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
