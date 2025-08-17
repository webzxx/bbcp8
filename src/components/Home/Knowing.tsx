import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Knowing = () => {
  return (
    <section className="fluid-container">
      <div className="relative overflow-hidden rounded-3xl flex items-end lg:items-center w-full h-80 md:h-auto p-20">
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-cover bg-center">
          <Image
            src="/gradient.jpg"
            alt="Gradient Background"
            fill
            className="absolute inset-0 w-full h-full object-fill"
            priority
          />
        </div>

        <div className="absolute inset-0 w-full h-full"></div>

        <div className="hidden md:block relative">
          <p className="text-white font-headline text-lg lg:text-xl tracking-tighter leading-none mb-8 opacity-75">
            Knowing God Above All Else
          </p>

          <h2 className=" text-white font-headline-sans font-bold text-5xl lg:text-6xl xl:text-7.5xl tracking-tighter mb-3 leading-none">
            Good Works
          </h2>

          <p className="text-white leading-snug text-lg tracking-tighter hidden md:block mb-10 max-w-md">
            Good works exists to see people in our House and around the globe
            know and draw closer to Jesus. This is an incredible tool for
            everyone in our House to engage with God each and every day through
            the Truth of His Word.
          </p>

          <div className="relative inline-flex hover:opacity-75">
            <Button
              variant="default"
              className="inline-flex bg-sky-400 text-black hover:bg-white hover:opacity-75 font-sans leading-none text-lg tracking-tighter py-7 px-14 rounded-4xl items-center justify-center gap-4 transition whitespace-nowrap select-none cursor-pointer"
            >
              Watch Online
            </Button>
          </div>
        </div>
      </div>

      <div className="md:hidden relative p-6">
        <p className="text-charcoal font-headline text-lg lg:text-xl tracking-tighter leading-none mb-2">Knowing God Above All Else</p>

        <h2 className=" text-current font-headline-sans font-bold text-4xl lg:text-5xl mb-4 tracking-tighter leading-none ">Soul Winning</h2>

        <p className="text-charcoal leading-snug text-lg tracking-tighter block mb-3 max-w-md">
          Soul Winning exists to see people in our House and around the globe
          know and draw closer to Jesus. This is an incredible tool for
          everyone in our House to engage with God each and every day through
          the Truth of His Word.
        </p>

        <div className="relative inline-flex">
          <Button
            variant="default"
            className=" inline-flex bg-sky-400 text-black hover:bg-white font-sans leading-none text-lg tracking-tighter py-7 px-14 rounded-4xl items-center justify-center gap-4 transition whitespace-nowrap select-none cursor-pointer "
          >
            Watch Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Knowing;
