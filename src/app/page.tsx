"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import CTA from "@/components/Home/CTA";
import Giving from "@/components/Home/Giving";
import Hero from "@/components/Home/Hero";
import Knowing from "@/components/Home/Knowing";
import Leadership from "@/components/Home/Leadership";

export default function Home() {
    useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="flex flex-col items-center justify-between relative -mb-px">
      <Hero />
      <CTA />
      <Leadership />
      <Knowing />
      <Giving />
    </main>
  );
}
