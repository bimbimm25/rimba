import { Hero } from '@/components/landing/Hero';
import { LearningPillars } from '@/components/landing/LearningPillars';
import { JourneyPath } from '@/components/landing/JourneyPath';
import { CtaSection } from '@/components/landing/CtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <LearningPillars />
      <JourneyPath />
      <CtaSection />
    </div>
  );
}