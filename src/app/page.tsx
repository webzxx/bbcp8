import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative -mb-px ">
      <Hero />
      <CTA />
      <Leadership />
    </main>
  );
}
