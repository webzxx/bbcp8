import Image from "next/image";

export default function Events() {
  return (
    <section id="hero" className="fluid-container">
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/5 relative z-10">
          <h1 className="text-current font-headline-sans font-bold text-6xl lg:text-8xl xl:text-[10rem] leading-none tracking-tighter mb-3">
            Upcoming
          </h1>

          <div className="lg:px-8 xl:px-16">
            <h2 className="text-current font-headline text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-3 leading-negative">
              at Bible Baptist Church
            </h2>

            <p className="text-gray-800 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 prose max-w-full lg:max-w-sm">
              {" "}
              See what&apos;s coming up at our locations in Bible Baptist Church,
              Project 8, Quezon City. Filter the list below to see what&apos;s
              happening near you!
            </p>
          </div>
        </div>

        <div className="w-full h-80 md:h-140 lg:w-3/5 lg:min-h-lgplus relative overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/events-hero.jpg"
                alt="Events Hero"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main className="pb-20 sm:pb-24 xl:pb-32 relative outer-grid -mb-px"></main>
    </section>
  );
}
