import CTA from "@/components/CTA";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative outer-grid -mb-px">
      <Hero />
      <CTA />
    </main>
  );
}
