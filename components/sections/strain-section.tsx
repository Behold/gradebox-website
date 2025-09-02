'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function StrainSection() {
  return (
    <section className="strain-section py-20">
      <Container>
        <div className="mx-auto">
          <div className="bg-[var(--strain-section-card)] rounded-3xl pt-8 sm:pt-12 lg:pt-16 px-8 sm:px-12 lg:px-16">
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
                  <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-tight" style={{ color: 'var(--strain-section-text)' }}>
                    The Silent Strain of Grading
                  </h2>
                  <p className="text-md sm:text-lg lg:text-[18px] leading-tight sm:leading-relaxed lg:leading-relaxed" style={{ color: 'var(--strain-section-text)' }}>
                    Behind every stack of papers is a teacher with a story. Hear theirs—then imagine yours.
                  </p>
                </div>

                {/* Image Placeholder - Bottom edge with no padding */}
                <motion.div 
                  className="w-full aspect-square rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--strain-section-bg)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <span style={{ color: 'var(--strain-section-text)' }} className="text-lg">Placeholder img</span>
                </motion.div>
              </motion.div>

              {/* Right Section - Three Challenge Cards with Offset */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Card 1: Time Spent */}
                <motion.div 
                  className="rounded-full p-6 space-y-4"
                  style={{ backgroundColor: 'var(--strain-section-bg)' }}
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
                  style={{ backgroundColor: 'var(--strain-section-bg)' }}
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
                  style={{ backgroundColor: 'var(--strain-section-bg)' }}
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
          </div>
        </div>
      </Container>
    </section>
  );
}
