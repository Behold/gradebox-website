'use client';

import { Container } from '@/components/layout/container';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowSectionDesktop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const howContentRef = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const c4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate dynamic offscreen positioning
      const calculateOffscreenOffset = () => {
        const cardWidth = 400; // max-w-[400px]
        return (window.innerWidth - cardWidth) / cardWidth * 100 + 20;
      };

      const offscreenOffset = calculateOffscreenOffset();

      // Set initial states with dynamic positioning
      gsap.set(c1.current, { xPercent: 0, yPercent: 0, rotation: 0 });
      gsap.set(c2.current, { xPercent: offscreenOffset, yPercent: 0, rotation: 0 });
      gsap.set(c3.current, { xPercent: offscreenOffset, yPercent: 0, rotation: 0 });
      gsap.set(c4.current, { xPercent: offscreenOffset, yPercent: 0, rotation: 0 });
      gsap.set(howContentRef.current, { xPercent: 0, yPercent: 0, rotation: 0 });

      // ResizeObserver for better performance and precision
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const newOffscreenOffset = calculateOffscreenOffset();
          
          // Update offscreen cards with smooth transition
          gsap.to([c2.current, c3.current, c4.current], {
            xPercent: newOffscreenOffset,
            duration: 0.3,
            ease: "power2.out"
          });

          // Refresh ScrollTrigger to recalculate positions
          ScrollTrigger.refresh();
        }
      });

      // Observe the section for size changes
      if (sectionRef.current) {
        resizeObserver.observe(sectionRef.current);
      }

      // Fallback window resize listener for older browsers
      const handleResize = () => {
        const newOffscreenOffset = calculateOffscreenOffset();
        gsap.set(c2.current, { xPercent: newOffscreenOffset });
        gsap.set(c3.current, { xPercent: newOffscreenOffset });
        gsap.set(c4.current, { xPercent: newOffscreenOffset });
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        }
      });

      // Card animations
      tl.addLabel("card1");
      tl.set(c1.current, { yPercent: 0 });
      tl.set(howContentRef.current, { yPercent: 0 });

      tl.to(c2.current, { xPercent: -15, yPercent: 15, rotation: 16 });
      tl.addLabel("card2");
      tl.to(c1.current, { xPercent: -12, yPercent: 10, rotation: -8 }, "-=0.3");

      tl.to(c3.current, { xPercent: 0, yPercent: 20, rotation: -5 });
      tl.addLabel("card3");
      tl.to(c2.current, { xPercent: -29, yPercent: 10, rotation: 7 }, "-=0.3");
      tl.to(c1.current, { xPercent: -40, yPercent: 17, rotation: -7 }, "-=0.3");

      tl.to(c4.current, { xPercent: 3, yPercent: 25, rotation: 8 });
      tl.addLabel("card4");
      tl.to(c3.current, { xPercent: -13, yPercent: 20, rotation: -17 }, "-=0.3");
      tl.to(c2.current, { xPercent: -32, yPercent: 7, rotation: 2 }, "-=0.3");
      tl.to(c1.current, { xPercent: -42, yPercent: 20, rotation: -4 }, "-=0.3");

      ScrollTrigger.refresh();

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', handleResize);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-transparent">
      <Container>
      <div className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - How Content */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div ref={howContentRef} className="how-content space-y-6 max-w-lg">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
                  How It Works
                </h2>
                <p className="text-md sm:text-lg lg:text-[18px] text-gray-700 dark:text-white/90 leading-tight sm:leading-relaxed lg:leading-relaxed lg:max-w-[75%]">
                  A simple and streamlined approach designed to completely transform and modernize your grading workflow, making it faster, easier, and far more efficient than ever before.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Cards */}
          <div 
            ref={cardsRef}
            className="relative h-screen py-16 items-start flex justify-center"
          >
            {/* Card 1 - Upload Assignment */}
            <div 
              className="absolute w-[90%] lg:w-full max-w-[350px] lg:max-w-[400px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl transform-gpu p-6 lg:p-8"
              ref={c1} 
              style={{ zIndex: 2, boxShadow: '8px 8px 0px rgba(45, 44, 43, 0.08)', backgroundColor: '#0091FF' }}
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
              className="absolute w-[90%] lg:w-full max-w-[350px] lg:max-w-[400px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl transform-gpu p-6 lg:p-8"
              ref={c2} 
              style={{ zIndex: 3, boxShadow: '8px 8px 0px rgba(45, 44, 43, 0.08)', backgroundColor: '#9526CC' }}
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
              className="absolute w-[90%] lg:w-full max-w-[350px] lg:max-w-[400px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl transform-gpu p-6 lg:p-8"
              ref={c3} 
              style={{ zIndex: 4, boxShadow: '8px 8px 0px rgba(45, 44, 43, 0.08)', backgroundColor: '#FF8400' }}
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
              className="absolute w-[90%] lg:w-full max-w-[350px] lg:max-w-[400px] aspect-[3/4] text-white flex justify-center items-center rounded-2xl transform-gpu p-6 lg:p-8"
              ref={c4} 
              style={{ zIndex: 5, boxShadow: '8px 8px 0px rgba(45, 44, 43, 0.08)', backgroundColor: '#FDE600' }}
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
      </Container>
    </div>
  );
};

export default HowSectionDesktop;
