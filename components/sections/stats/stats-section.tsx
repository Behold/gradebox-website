'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { STATS_IMAGES } from '@/constants/images';

export function StatsSection() {
  const stats = [
    {
      iconSrc: STATS_IMAGES.hourglass,
      iconColor: 'text-blue-500',
      stat: '350+',
      statColor: 'text-blue-500',
      description: 'hours per year are spent grading, which equals a full workday every week lost to paperwork instead of teaching.'
    },
    {
      iconSrc: STATS_IMAGES.balance,
      iconColor: 'text-orange-500',
      stat: '75%',
      statColor: 'text-orange-500',
      description: 'teachers grade outside contracted hours, working nights, weekends, and breaks —eroding their work-life balance.'
    },
    {
      iconSrc: STATS_IMAGES.lamp,
      iconColor: 'text-purple-500',
      stat: '30+',
      statColor: 'text-purple-500',
      description: 'hours weekly are consumed by detailed feedback, delaying returns and limiting students\' ability to act.'
    },
    {
      iconSrc: STATS_IMAGES.clock,
      iconColor: 'text-pink-500',
      stat: '5',
      statColor: 'text-pink-500',
      description: 'hours each week are lost by teachers, time that could instead go to lesson planning, instruction, or support.'
    }
  ];

  return (
    <section className="stats-section py-20">
      <Container>
        <div className="mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-foreground">
              The Hidden Cost of Manual Grading
            </h2>
            <p className="text-md sm:text-lg lg:text-[18px] text-muted-foreground max-w-[75vw] mx-auto leading-tight sm:leading-relaxed lg:leading-relaxed">
              Teachers spend hundreds of hours each year grading, losing valuable time, delaying feedback for students, and sacrificing work-life balance.
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[var(--stats-section-card)] rounded-2xl p-6 space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    <img 
                      src={item.iconSrc}
                      alt=""
                      className="w-30 h-30 lg:w-24 lg:h-24 aspect-square"
                    />
                  </div>

                  {/* Statistic */}
                  <div className="text-center">
                    <h3 className={`text-5xl sm:text-4xl font-bold ${item.statColor}`}>
                      {item.stat}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg sm:text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
