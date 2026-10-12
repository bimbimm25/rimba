import { Hero } from '@/components/landing/Hero';
import { LearningPillars } from '@/components/landing/LearningPillars';
import { JourneyPath } from '@/components/landing/JourneyPath';
import { WhyRimba } from '@/components/landing/WhyRimba';
import { CtaSection } from '@/components/landing/CtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <LearningPillars />
      <JourneyPath />
      <WhyRimba />
      <CtaSection />
    </div>
  );
}