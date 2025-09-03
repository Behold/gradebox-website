import { HeroSection } from '@/components/sections/hero';
import { JourneySection } from '@/components/sections/journey';
import { StrainSection } from '@/components/sections/strain';
import { WhySection } from '@/components/sections/why-section';
import { StatsSection } from '@/components/sections/stats';
import { HowSection } from '@/components/sections/how-it-works';
import { JoinSection } from '@/components/sections/join-waitlist';

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
