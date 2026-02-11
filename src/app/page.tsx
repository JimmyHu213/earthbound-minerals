import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Operations from "@/components/sections/Operations";
import Sustainability from "@/components/sections/Sustainability";
import News from "@/components/sections/News";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Operations />
      <Sustainability />
      <News />
    </main>
  );
}
