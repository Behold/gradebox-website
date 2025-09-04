'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { JOURNEY_IMAGES } from '@/constants/images';

export function JourneySection() {
  return (
    <section className="journey-section py-20 bg-background">
      <Container>
        <div className="mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
              One Platform. Two Journeys.
            </h2>
            <p className="text-md sm:text-lg lg:text-[18px] text-muted-foreground max-w-[75vw] mx-auto leading-tight sm:leading-relaxed lg:leading-relaxed">
              Gradebox was built to serve the entire classroom ecosystem—teachers who need time back, and parents who want to stay connected.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* For Educators */}
            <div className="space-y-0 flex flex-col">
              {/* Image */}
              <motion.div 
                className="w-full aspect-[4/3] rounded-t-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0.4
                }}
              >
                <Image
                  src={JOURNEY_IMAGES.educator}
                  alt="Gradebox for Educators"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>

              {/* Content Card */}
              <div className="bg-[#F8F6EE] rounded-xl p-8 text-center space-y-6 relative z-10 flex-1 flex flex-col justify-between items-center">
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-card-foreground">
                    For Educators
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gradebox reduces grading overload by digitizing student work,
                    automating AI feedback, and syncing directly to your
                    gradebook.
                  </p>
                </div>
                <Button className="px-12 py-6 rounded-full bg-[#969492] font-bold text-white transform hover:scale-105 hover:bg-[#969492]/90 transition-all duration-200">
                  Read more
                </Button>
              </div>
            </div>

            {/* For Parents */}
            <div className="space-y-0 flex flex-col">
              {/* Image */}
              <motion.div 
                className="w-full aspect-[4/3] rounded-t-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  visualDuration: 0.6,
                  bounce: 0.4
                }}
              >
                <Image
                  src={JOURNEY_IMAGES.parents}
                  alt="Gradebox for Parents"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>

              {/* Content Card */}
              <div className="bg-[#F8F6EE] rounded-xl p-8 text-center space-y-6 relative z-10 flex-1 flex flex-col justify-between items-center">
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-card-foreground">
                    For Parents
                  </h3>
                  <p className="text-muted-foreground leading-tight sm:leading-relaxed lg:leading-relaxed">
                    Gradebox keeps you in the loop with real-time updates,
                    assignment previews, and finalized grades the moment
                    they&apos;re ready.
                  </p>
                </div>
                <Button className="flex-auto px-12 py-6 rounded-full bg-[#969492] font-bold text-white transform hover:scale-105 hover:bg-[#969492]/90 transition-all duration-200">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
