'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { HERO_IMAGES } from '@/constants/images';

export function WhySection() {
  return (
    <section className="why-section py-20">
      <Container>
        <div className="mx-auto">
          <div className="bg-[var(--why-section-bg-light)] dark:bg-[var(--why-section-bg-dark)] rounded-3xl p-12 sm:p-16 lg:p-20 relative">
            <div className="relative z-10 text-center space-y-4">
                                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-background leading-tight">
                    Why we&apos;re building Gradebox
                  </h2>

              <p className="text-md sm:text-md lg:text-[18px] text-background/90 max-w-3xl mx-auto leading-relaxed">
                The idea for Gradebox began when we were teachers, overwhelmed
                by piles of notebooks to grade. We wanted a faster, easier way
                to scan handwritten work, keep parents in the loop, and see
                useful data in real time—all in one simple classroom motion.
              </p>

              {/* SVG Image */}
              <div className="flex justify-center mt-12">
                <Image
                  src={HERO_IMAGES.why}
                  alt="Why we're building Gradebox illustration"
                  width={400}
                  height={200}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
