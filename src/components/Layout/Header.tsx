import React from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full h-44 z-40 transition">
      <div className="flex h-14 w-full items-center justify-center bg-[#e8e4e4] pt-4">
        <NavMenu />
      </div>

      <div className="px-24 py-4 md:py-8 relative flex mx-auto justify-between items-center gap-6 fluid-container transition-all duration-200">
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src="/bbc-logo.jpg"
              alt="logo"
              width={80}
              height={50}
              className="cursor-pointer rounded-full"
              priority
            />
          </Link>

          <div className="flex flex-col items-center justify-center uppercase">
            <h1 className="font-semibold leading-none">Bible Baptist Church</h1>
            <h2 className="text-sm">Project 8, Quezon City</h2>
          </div>
        </div>

        <div className="">
          <Button
            variant="default"
            className=" inline-flex bg-sky-400 text-black hover:bg-charcoal hover:text-white py-3 px-6 mb-4 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-no-wrap group select-none cursor-pointer "
          >
            Upcoming Events
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
