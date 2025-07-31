import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center w-full">
      <div
        className="container relative flex h-[calc(84vh-64px)] w-full items-center justify-center bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/HeroImg.jpg')",
        }}
      >
        <div className="w-full max-w-3xl px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-5xl font-semibold leading-tight mb-4">
            Shine as lights in the world, holding forth the <span className="text-[#ad945e]">Word</span> of life
          </p>

          <h1 className="text-white text-2xl">
            Philippians 2:15-16
          </h1>

          <div className="mt-10">
            <Button variant="outline" className="text-lg px-12 py-8 rounded-full bg-[#00b7e3] border-none">Learn More</Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
