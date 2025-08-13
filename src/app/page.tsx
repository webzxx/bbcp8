import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import Leadership from "@/components/Home/Leadership";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative -mb-px ">
      <Hero />
      <CTA />
      <Leadership />
    </main>
  );
}
