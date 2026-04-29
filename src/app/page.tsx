import { Badges } from "@/components/badges";
import { HeroHome } from "@/components/hero-home";
import { OriginSection } from "@/components/the-origin";

export default function Home() {
  return (
    <>
      <HeroHome />
      <OriginSection />
      <Badges />
    </>
  );
}
