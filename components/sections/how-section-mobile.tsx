'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HowCards from './how-cards';

gsap.registerPlugin(ScrollTrigger);

const HowSectionMobile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log('Mobile useLayoutEffect running');
    console.log('Section ref:', sectionRef.current);
    
    const ctx = gsap.context(() => {
      console.log('GSAP context created');
      
      const cards = gsap.utils.toArray(".card") as HTMLElement[];
      
      if (cards.length === 0) {
        return;
      }
      
      // Calculate card height based on aspect ratio (3:4) and viewport width
      const cardWidth = window.innerWidth - 48; // Full viewport minus 48px spacing (px-6 = 24px each side)
      const cardHeight = (cardWidth * 4) / 3; // aspect-[3/4]
      const cardSpacing = cardHeight + 64; // Card height plus 64px spacing
      
      const spacer = 32;
      const minScale = 1;

      const distributor = gsap.utils.distribute({ base: minScale, amount: 0 });

      cards.forEach((card, index) => {
        const scaleVal = distributor(index, cards[index], cards);
        
        // Set initial stacked positions
        gsap.set(card, {
          top: index * cardSpacing, // Stack cards below each other
          zIndex: index + 1
        });
        
        const tween = gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,
            invalidateOnRefresh: true
          },
          ease: "none",
          scale: scaleVal
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer + 24} top`,
          endTrigger: '.cards',
          end: `bottom bottom`,
          pin: true,
          pinSpacing: false,
          id: 'pin',
          invalidateOnRefresh: true,
        });
      });
      
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-transparent lg:hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Mobile Layout: Stacked content above cards */}
        <div className="flex flex-col">
          <div className="px-4 py-8 text-center">
            <div className="how-content space-y-6 max-w-lg mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                How It Works
              </h2>
              <p className="text-base leading-tight sm:leading-relaxed text-gray-700 dark:text-white/90">
                A simple and streamlined approach designed to completely transform and modernize your grading workflow, making it faster, easier, and far more efficient than ever before.
              </p>
            </div>
          </div>
          
          <HowCards cardsRef={cardsRef} />
        </div>
      </div>
    </div>
  );
};

export default HowSectionMobile;
