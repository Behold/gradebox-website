'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { HERO_IMAGES } from '@/constants/images';
import { Container } from '@/components/layout/container';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const content = contentRef.current;

    if (section && container && content) {
      // Function to calculate and apply scaling
      const updateScaling = () => {
        // Get the content container dimensions
        const contentRect = content.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        
        // Calculate the scale needed to fill the section from all sides
        const scaleX = sectionRect.width / contentRect.width;
        const scaleY = sectionRect.height / contentRect.height;
        const sectionScale = Math.max(scaleX, scaleY);

        // Set initial position and size to match content container exactly
        gsap.set(container, {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: contentRect.width,
          height: contentRect.height,
          transformOrigin: "center center"
        });

        // Kill only the ScrollTrigger for this specific section
        const existingTrigger = ScrollTrigger.getById(`why-${section.id || 'default'}`);
        if (existingTrigger) {
          existingTrigger.kill();
        }

        // Create the scroll-triggered animation
        const tl = gsap.timeline({
          scrollTrigger: {
            id: `why-${section.id || 'default'}`,
            trigger: section,
            start: "top center", // Start when top of section hits middle of viewport
            end: "bottom 25%", // End when section bottom hits 20% of viewport height (much later)
            scrub: 2,            // Increased scrub time for slower animation
            markers: false,      // Set to true for debugging
          }
        });

        // Scale the container outward to fill the entire section
        tl.fromTo(container, 
          { 
            scale: 1,
            y: 0
          },
          {
            scale: sectionScale, // Scale to fill the entire section
            y: -50,             // Slight vertical adjustment
            ease: "power1.out" // Power1 easing for dynamic scaling
          }
        );

        // Animate border-radius from rounded to sharp edges at 90% of scaling
        tl.to(container, {
          borderRadius: "0px",
          ease: "expo.out"
        }, ">0.1"); // Start after 90% of scaling is complete

        // Scale back down as we continue scrolling
        tl.to(container, {
          scale: 1,
          y: 0,
          ease: "power1.in"
        }, "+=0.5"); // Increased delay for slower return

        // Animate border-radius back to rounded corners
        tl.to(container, {
          borderRadius: "24px", // 3xl = 24px
          ease: "power1.in"
        }, "<"); // Start at the same time as scale back
      };

      // Initial setup
      requestAnimationFrame(updateScaling);

      // Create ResizeObserver for dynamic content changes
      const resizeObserver = new ResizeObserver(() => {
        updateScaling();
      });

      // Observe both section and content for size changes
      resizeObserver.observe(section);
      resizeObserver.observe(content);

      // Add window resize listener for broader viewport changes
      const handleResize = () => {
        updateScaling();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        // Cleanup
        resizeObserver.disconnect();
        window.removeEventListener('resize', handleResize);
        
        // Kill only this section's ScrollTrigger
        const existingTrigger = ScrollTrigger.getById(`why-${section.id || 'default'}`);
        if (existingTrigger) {
          existingTrigger.kill();
        }
      };
    }
  }, []);

  return (
            <section ref={sectionRef} className="why py-20 overflow-hidden relative px-6 sm:px-6 lg:px-8">
      {/* Content that stays completely unchanged - positioned to maintain section height */}
      <div 
        ref={contentRef}
        className=" max-w-[1280px] relative z-20 text-center space-y-4 max-w-3xl mx-auto py-16 flex flex-col justify-center"
        style={{ 
          transformOrigin: "center center",
          willChange: "transform"
        }}
      >
        <Container>
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white leading-tight">
          Why we&apos;re building Gradebox
        </h2>

        <p className="text-md sm:text-md lg:text-[18px] text-white/90 leading-tight sm:leading-relaxed lg:leading-relaxed">
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
            className="w-[75%] sm:w-[70%] md:w-[75%] lg:w-[75%] xl:w-[75%] h-auto max-w-full object-contain"
            style={{ maxWidth: '75%' }}
          />
        </div>
        </Container>
      </div>

      {/* Container that will scale - positioned behind content */}
      <div 
        ref={containerRef}
        className="absolute inset-0 transform-gpu"
        style={{ 
          transformOrigin: "center center",
          willChange: "transform"
        }}
      >
        {/* Background that scales */}
        <div className="bg-blue-600 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative mx-auto h-full" style={{ maxWidth: "1280px" }}>
          {/* This div is just for the background - no content */}
        </div>
      </div>
    </section>
  );
}
