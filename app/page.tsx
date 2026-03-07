import HeroSection from "./components/HeroSection";
import HikeCard from "./components/HikeCard";
import { hikes } from "./data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-8 py-16 space-y-6">
      {hikes.map((hike) => (
        <HikeCard key={hike.name} hike={hike} />
      ))}
      </section>
    </>
  );
}