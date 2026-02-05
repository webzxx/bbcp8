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

      <main className="pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32 relative outer-grid -mb-px">
        <section>
          <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row items-start lg:items-center">
            <div className="relative w-full overflow-hidden rounded-xl lg:w-9/20 aspect-square">
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src="/give-why.jpg"
                  alt="Why We Give"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative space-y-6 lg:w-11/20 tracking-tight">
              <p className=" text-current font-headline-sans font-bold text-5xl lg:text-6xl xl:text-8xl tracking-tighter mb-5 leading-negative">
                Why We Give
              </p>

              <p className="leading-normal text-base tracking-wide max-w-lg"></p>

              <p>
                At Bible Baptist Church, we don’t say, “we’re going to take the
                offering”. Simply stated: God is not a taker. God is a giver. So
                we give the offering. Here’s the truth: there’s nothing you and
                I have that God needs.
              </p>

              <p>God doesn’t want to take the offering.</p>

              <p>God doesn’t want to take our money.</p>

              <p>Because, God doesn’t need our money.</p>

              <p>
                On the other hand, God has let go of everything. He sent His Son
                to give us life and breath and freedom. To set us free from our
                chains, from our bondage, from what enslaved us. To deliver us
                out of death and into life. To give us Himself. So in response
                to all He’s done we say, “God I want the world to know about
                Jesus. So I’m going to give into our House. I’m going to give
                into Bible Baptist Church because I believe here my money will be
                multiplied to help the city and the world come to know Jesus. At
                the end of the day, when I stand in heaven I’m going to know
                that money wasn’t lost. That money was gained because it
                multiplied itself over and over again into people’s lives.”
              </p>

              <p>
                So the prayer is that God would take our hearts today. Capture
                us today. Awaken us to that fact that He loves us and cares for
                us. There’s nothing we have that He doesn’t already have a
                million times over more than we have. And there’s nothing we
                have that didn’t come from Him first. Then, we will have this
                great privilege and ability to respond by joining Him with our
                time, our energy, our gifts, our opportunities, and our money.
                We have this opportunity to lean into the things that last
                forever and sewing into what God is doing here in this House.
              </p>

              <p>For Jesus!</p>

              <p>Ansel</p>

              <p></p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
