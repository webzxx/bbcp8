import CTA from "@/components/Home/CTA";
import Giving from "@/components/Home/Giving";
import Hero from "@/components/Home/Hero";
import Knowing from "@/components/Home/Knowing";
import Leadership from "@/components/Home/Leadership";

export default function Home() {
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
