'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { HERO_IMAGES } from '@/constants/images';
import { OTHER_IMAGES } from '@/constants/images';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function GradingSection() {
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
        const existingTrigger = ScrollTrigger.getById(`grading-${section.id || 'default'}`);
        if (existingTrigger) {
          existingTrigger.kill();
        }

        // Create the scroll-triggered animation
        const tl = gsap.timeline({
          scrollTrigger: {
            id: `grading-${section.id || 'default'}`,
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
        const existingTrigger = ScrollTrigger.getById(`grading-${section.id || 'default'}`);
        if (existingTrigger) {
          existingTrigger.kill();
        }
      };
    }
  }, []);

  return (
            <section ref={sectionRef} className="grading py-20 overflow-hidden relative px-6 sm:px-6 lg:px-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Section - Title, Description, and Image */}
            <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <div className="space-y-6">
                <div className="space-y-6">
                <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-center lg:text-left" style={{ color: 'var(--strain-section-text)' }}>
                    The Silent Strain of Grading
                </h2>
                <p className="text-md sm:text-lg lg:text-[18px] max-w-[75vw] mx-auto lg:mx-0 leading-tight sm:leading-relaxed lg:leading-relaxed text-center lg:text-left" style={{ color: 'var(--strain-section-text)' }}>
                    Behind every stack of papers is a teacher with a story. <br/>Hear theirs—then imagine yours.
                </p>
                </div>
            </div>

                         {/* Grading Illustration */}
             <motion.div 
                 className="w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             >
                 <Image
                     src={OTHER_IMAGES.grading}
                     alt="Grading workflow illustration"
                     width={400}
                     height={400}
                     className="w-full h-full object-contain"
                     style={{ aspectRatio: '1/1' }}
                 />
             </motion.div>
            </motion.div>

            {/* Right Section - Three Challenge Cards with Offset */}
            <motion.div 
            className="flex flex-col justify-center h-full space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
                         {/* Card 1: Time Spent */}
             <motion.div 
                 className="rounded-full p-6 space-y-4"
                 style={{ backgroundColor: '#6822BC' }}
                 initial={{ opacity: 0, y: 30, x: -20 }}
                 whileInView={{ opacity: 1, y: 0, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
             >
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold" style={{ color: 'var(--strain-section-text)' }}>
                TIME SPENT
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--strain-section-text)' }}>
                I spend hours each night grading assignments. By the time I&apos;m done, it&apos;s midnight. I barely have energy left for planning tomorrow&apos;s lessons.
                </p>
            </motion.div>

                         {/* Card 2: Errors & Inconsistencies */}
             <motion.div 
                 className="rounded-full p-6 space-y-4"
                 style={{ backgroundColor: '#6822BC' }}
                 initial={{ opacity: 0, y: 30, x: 20 }}
                 whileInView={{ opacity: 1, y: 0, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             >
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold" style={{ color: 'var(--strain-section-text)' }}>
                ERRORS & INCONSISTENCIES
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--strain-section-text)' }}>
                No matter how careful I am, mistakes creep into my grading. A miscalculated score here, an overlooked answer there—it&apos;s frustrating for me and unfair to my students.
                </p>
            </motion.div>

                         {/* Card 3: Burnout & Delayed Feedback */}
             <motion.div 
                 className="rounded-full p-6 space-y-4"
                 style={{ backgroundColor: '#6822BC' }}
                 initial={{ opacity: 0, y: 30, x: -20 }}
                 whileInView={{ opacity: 1, y: 0, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             >
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold" style={{ color: 'var(--strain-section-text)' }}>
                BURNOUT & DELAYED FEEDBACK
                </h3>
                <p className="leading-tight sm:leading-relaxed lg:leading-relaxed" style={{ color: 'var(--strain-section-text)' }}>
                By the time I finish grading a set of essays, weeks have gone by. My students deserve timely feedback, but I can&apos;t keep up. The stress is overwhelming.
                </p>
            </motion.div>
            </motion.div>
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
        <div className="rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative mx-auto h-full" style={{ maxWidth: "1280px", backgroundColor: '#2D065C' }}>
          {/* This div is just for the background - no content */}
        </div>
      </div>
    </section>
  );
}
