'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Clock, Scale, Lightbulb, Timer } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Clock,
      iconColor: 'text-blue-500',
      stat: '350+',
      statColor: 'text-blue-500',
      description: 'hours per year are spent grading, which equals a full workday every week lost to paperwork instead of teaching.'
    },
    {
      icon: Scale,
      iconColor: 'text-orange-500',
      stat: '75%',
      statColor: 'text-orange-500',
      description: 'teachers grade outside contracted hours, working nights, weekends, and breaks —eroding their work-life balance.'
    },
    {
      icon: Lightbulb,
      iconColor: 'text-purple-500',
      stat: '30+',
      statColor: 'text-purple-500',
      description: 'hours weekly are consumed by detailed feedback, delaying returns and limiting students\' ability to act.'
    },
    {
      icon: Timer,
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
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-tight text-foreground">
              The Hidden Cost of Manual Grading
            </h2>
            <p className="text-md sm:text-lg lg:text-[18px] text-muted-foreground max-w-4xl mx-auto leading-tight sm:leading-relaxed lg:leading-relaxed">
              Teachers spend hundreds of hours each year grading, losing valuable time, delaying feedback for students, and sacrificing work-life balance.
            </p>
          </motion.div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[var(--stats-section-card)] rounded-2xl p-6 space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    <IconComponent 
                      size={48} 
                      className={item.iconColor}
                    />
                  </div>

                  {/* Statistic */}
                  <div className="text-center">
                    <h3 className={`text-3xl sm:text-4xl font-bold ${item.statColor}`}>
                      {item.stat}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
