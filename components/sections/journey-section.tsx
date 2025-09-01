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
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-foreground leading-tight">
              One Platform. Two Journeys.
            </h2>
            <p className="text-md sm:text-lg lg:text-[18px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gradebox was built to serve the entire classroom
              ecosystem—teachers who need time back, and parents who want to
              stay connected.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Educators */}
            <motion.div 
              className="space-y-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <motion.div 
                className="w-full aspect-[4/3] rounded-t-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
              <div className="bg-card border border-border rounded-b-xl p-8 text-center space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-card-foreground">
                  For Educators
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gradebox reduces grading overload by digitizing student work,
                  automating AI feedback, and syncing directly to your
                  gradebook.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Read more
                </Button>
              </div>
            </motion.div>

            {/* For Parents */}
            <motion.div 
              className="space-y-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <motion.div 
                className="w-full aspect-[4/3] rounded-t-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
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
              <div className="bg-card border border-border rounded-b-xl p-8 text-center space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-card-foreground">
                  For Parents
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gradebox keeps you in the loop with real-time updates,
                  assignment previews, and finalized grades the moment
                  they&apos;re ready.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Read more
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
