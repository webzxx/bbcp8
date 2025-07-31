import React from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-44">
      <div className="flex h-14 w-full items-center justify-center bg-lightGray pt-4">
        <NavMenu />
      </div>

      <div className="container mx-auto flex flex-row items-center justify-between px-28 p-6">
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src="/BBC.jpg"
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
            <Button variant="outline" className="uppercase text-xs px-6 py-4 rounded-full bg-sky-500">Upcoming Events</Button>
          </div>
      </div>
    </div>
  );
};

export default Header;
