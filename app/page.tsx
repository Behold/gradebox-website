import { HeroSection } from '@/components/sections/hero-section';
import { WhySection } from '@/components/sections/why-section';
import { JourneySection } from '@/components/sections/journey-section';
import { StrainSection } from '@/components/sections/strain-section';
import { StatsSection } from '@/components/sections/stats-section';
import { HowSection } from '@/components/sections/how-section';
import { JoinSection } from '@/components/sections/join-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <JourneySection />
      <StrainSection />
      <StatsSection />
      <HowSection />
      <JoinSection />
    </>
  );
}
