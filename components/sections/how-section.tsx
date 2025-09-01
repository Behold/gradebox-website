'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const HowSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const c4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      const cardsElement = cardsRef.current;
      
      if (cardsElement) {
        // Set initial states
        gsap.set(c1.current, { xPercent: 0, yPercent: 0, rotation: 0 });
        gsap.set(c2.current, { xPercent: 200, yPercent: 0, rotation: 0 });
        gsap.set(c3.current, { xPercent: 200, yPercent: 0, rotation: 0 });
        gsap.set(c4.current, { xPercent: 200, yPercent: 0, rotation: 0 });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsElement,
            pin: true,
            pinSpacing: true,
            markers: false,
            start: "top-=50px top",
            end: "+=2000",
            scrub: 1,
          }
        });

        // Card animations
        tl.addLabel("card1");
        tl.set(c1.current, { yPercent: 0 });

        tl.to(c2.current, { xPercent: -10, yPercent: 15, rotation: 12 });
        tl.addLabel("card2");
        tl.to(c1.current, { xPercent: -20, yPercent: 10, rotation: -8 }, "-=0.3");

        tl.to(c3.current, { xPercent: 0, yPercent: 20, rotation: -5 });
        tl.addLabel("card3");
        tl.to(c2.current, { xPercent: -29, yPercent: 10, rotation: 7 }, "-=0.3");
        tl.to(c1.current, { xPercent: -50, yPercent: 14, rotation: 5 }, "-=0.3");

        tl.to(c4.current, { xPercent: 10, yPercent: 25, rotation: 8 });
        tl.addLabel("card4");
        tl.to(c3.current, { xPercent: 0, yPercent: 20, rotation: -5 }, "-=0.3");

        ScrollTrigger.refresh();
      }
    }, 200);

    return () => {
      // Cleanup handled by GSAP context
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen py-12 overflow-clip">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto px-4 lg:px-8 items-start min-h-screen">
        <div className="flex flex-col justify-start sticky top-[25vh] -translate-y-[25%] pt-[25vh] lg:text-left text-center">
          <h2 className="text-2xl lg:text-[28px] font-semibold mb-6 text-white leading-tight">
            How It Works
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-white/90 max-w-lg">
            A simple and streamlined approach designed to completely transform and modernize your grading workflow, making it faster, easier, and far more efficient than ever before.
          </p>
        </div>
        <div 
          className="relative flex justify-center items-start h-[50vh] lg:h-[80vh] w-full min-h-[300px] lg:min-h-[500px]" 
          ref={cardsRef}
        >
          <div 
            className="absolute w-[90%] lg:w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 lg:p-8 bg-gradient-to-br from-[#48dbfb] to-[#0abde3]"
            ref={c1} 
            style={{ zIndex: 2 }}
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-3">Upload Assignment</h1>
              <p className="text-base opacity-90">
                Simply upload your handwritten assignments through our intuitive interface. 
                Our AI instantly recognizes and processes your documents.
              </p>
            </div>
          </div>
          <div 
            className="absolute w-[90%] lg:w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 lg:p-8 bg-gradient-to-br from-[#a55eea] to-[#8b5cf6]"
            ref={c2} 
            style={{ zIndex: 3 }}
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-3">AI Analysis</h1>
              <p className="text-base opacity-90">
                Our advanced AI analyzes handwriting, identifies answers, and applies 
                consistent grading criteria across all submissions.
              </p>
            </div>
          </div>
          <div 
            className="absolute w-[90%] lg:w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 lg:p-8 bg-gradient-to-br from-[#2ed573] to-[#1e90ff]"
            ref={c3} 
            style={{ zIndex: 4 }}
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-3">Instant Results</h1>
              <p className="text-base opacity-90">
                Get immediate feedback and detailed analytics. Track student progress 
                and identify areas for improvement in real-time.
              </p>
            </div>
          </div>
          <div 
            className="absolute w-[90%] lg:w-full max-w-[280px] lg:max-w-[320px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 lg:p-8 bg-gradient-to-br from-[#ff6b6b] to-[#ee5a24]"
            ref={c4} 
            style={{ zIndex: 5 }}
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-3">Export & Share</h1>
              <p className="text-base opacity-90">
                Export grades, generate reports, and seamlessly integrate with your 
                existing learning management systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HowSection };
