'use client';

import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { LearningPillars } from '@/components/landing/LearningPillars';
import { JourneyPath } from '@/components/landing/JourneyPath';
import { WhyRimba } from '@/components/landing/WhyRimba';
import { CtaSection } from '@/components/landing/CtaSection';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero: Muncul lembut naik ke atas */}
      <AnimatedSection type="fade-up" delay={50}>
        <Hero />
      </AnimatedSection>

      {/* 2. Pilar Belajar: Membesar halus (fade-scale) */}
      <AnimatedSection type="fade-scale" delay={80}>
        <LearningPillars />
      </AnimatedSection>

      {/* 3. Alur Perjalanan (Journey): Meluncur dari kiri */}
      <AnimatedSection type="fade-slide-left" delay={80}>
        <JourneyPath />
      </AnimatedSection>

      {/* 4. Alasan R.I.M.B.A (Why Rimba): Meluncur dari kanan */}
      <AnimatedSection type="fade-slide-right" delay={80}>
        <WhyRimba />
      </AnimatedSection>

      {/* 5. CTA Section: Muncul mengembang lembut */}
      <AnimatedSection type="fade-scale" delay={100}>
        <CtaSection />
      </AnimatedSection>
    </div>
  );
}