import { HeroSection } from '@/components/sections/hero';
import { JourneySection } from '@/components/sections/journey';
import { GradingSection } from '@/components/sections/grading';
import { WhySection } from '@/components/sections/why';
import { StatsSection } from '@/components/sections/stats';
import { HowSection } from '@/components/sections/how-it-works';
import { JoinSection } from '@/components/sections/join-waitlist';
import { FooterSection } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <JourneySection />
      <GradingSection />
      <StatsSection />
      <HowSection />
      <JoinSection />
      <FooterSection />
    </>
  );
}
