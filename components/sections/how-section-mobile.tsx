'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      console.log('Found cards:', cards.length);
      console.log('Cards:', cards);
      
      if (cards.length === 0) {
        console.error('No cards found!');
        return;
      }
      
      // Calculate card height based on aspect ratio (3:4) and viewport width
      const cardWidth = window.innerWidth - 48; // Full viewport minus 48px spacing (px-6 = 24px each side)
      const cardHeight = (cardWidth * 4) / 3; // aspect-[3/4]
      const cardSpacing = cardHeight + 64; // Double the card height
      
      console.log('Card width:', cardWidth, 'Card height:', cardHeight, 'Spacing:', cardSpacing);
      
      const spacer = 32;
      const minScale = 1;

      const distributor = gsap.utils.distribute({ base: minScale, amount: 0 });

      cards.forEach((card, index) => {
        console.log(`Setting up card ${index}:`, card);
        
        const scaleVal = distributor(index, cards[index], cards);
        console.log(`Card ${index} scale:`, scaleVal);
        
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
            markers: true,
            invalidateOnRefresh: true
          },
          ease: "none",
          scale: scaleVal
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer + 24} top`,
          endTrigger: '.cards',
          end: `bottom bottom`, // End when card bottom reaches viewport top
          pin: true,
          pinSpacing: false,
          markers: true,
          id: 'pin',
          invalidateOnRefresh: true,
        });
      });
      
      console.log('All ScrollTriggers created');
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
          
          <div className="container">
            <div className="cards relative min-h-[280vh] pb-32" ref={cardsRef}>
              {/* Card 1 - Upload Assignment */}
              <div 
                className="card absolute w-full aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 bg-gradient-to-br from-[#48dbfb] to-[#0abde3]"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-3 text-gray-900">Upload Assignment</h1>
                  <p className="text-base text-gray-800">
                    Simply upload your handwritten assignments through our intuitive interface.
                    Our AI instantly recognizes and processes your documents.
                  </p>
                </div>
              </div>

              {/* Card 2 - AI Analysis */}
              <div 
                className="card absolute w-full aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 bg-gradient-to-br from-[#a55eea] to-[#8b5cf6]"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-3 text-gray-900">AI Analysis</h1>
                  <p className="text-base text-gray-800">
                    Our advanced AI analyzes handwriting, identifies answers, and applies
                    consistent grading criteria across all submissions.
                  </p>
                </div>
              </div>

              {/* Card 3 - Instant Results */}
              <div 
                className="card absolute w-full aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 bg-gradient-to-br from-[#2ed573] to-[#1e90ff]"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-3 text-gray-900">Instant Results</h1>
                  <p className="text-base text-gray-800">
                    Get immediate feedback and detailed analytics. Track student progress
                    and identify areas for improvement in real-time.
                  </p>
                </div>
              </div>

              {/* Card 4 - Export & Share */}
              <div 
                className="card absolute w-full aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 bg-gradient-to-br from-[#ff6b6b] to-[#ee5a24]"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-3 text-gray-900">Export & Share</h1>
                  <p className="text-base text-gray-800">
                    Export grades, generate reports, and seamlessly integrate with your
                    existing learning management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSectionMobile;
