"use client";

import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-24 md:h-44 z-50 relative transition">
      {/* Top Navigation Bar - Only on desktop */}
      <div className="hidden md:flex h-14 w-full items-center justify-center bg-[#e8e4e4] pt-4">
        <NavMenu />
      </div>

      {/* Logo and Actions */}
      <div className="px-6 md:px-24 py-4 md:py-8 relative flex mx-auto justify-between items-center gap-6 fluid-container">
        {/* Logo */}
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src="/bbc-logo.jpg"
              alt="logo"
              width={60}
              height={50}
              className="cursor-pointer rounded-full"
              priority
            />
          </Link>

          <div className="hidden md:flex flex-col items-center justify-center uppercase">
            <h1 className="font-semibold leading-none">Bible Baptist Church</h1>
            <h2 className="text-sm">Project 8, Quezon City</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Upcoming Events - Only on medium+ */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="inline-flex bg-sky-400 text-black hover:bg-charcoal hover:text-white py-3 px-6 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-no-wrap group select-none cursor-pointer"
            >
              Upcoming Events
            </Button>
          </div>

          {/* Hamburger Menu - Show on small devices */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={40} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            absolute flex justify-center items-center top-0 left-0 right-0 bg-black text-white 
            font-bold shadow-lg p-4 pt-24 z-50 md:hidden animate-slideDown dropdown-initial w-full
          "
          style={{ animationDelay: "0.1s" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-5 p-4 rounded-lg hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={40} />
          </button>

          {/* Menu Items */}
          <NavMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
