"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { PaperAnimation } from "@/components/animations/paper-animation";
import { Flag } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen bg-[#01092A] text-white">
        <Container className="relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center">
                <Logo height={48} />
              </div>

              {/* Main Heading */}
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[120%] text-white'>
                Transform Paper Assignments into Your Digital Gradebook
              </h1>
              
              {/* Subtitle */}
              <p className="text-md sm:text-md lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                GradeBox is an intelligent grading platform that bridges the gap between handwritten student assignments and modern digital classrooms.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl shadow-lg flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  Join the waitlist
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-sm">Be part of the movement helping teachers reclaim their time.</p>
              </div>
            </div>

            {/* Right Content - Paper Animation */}
            <div className="absolute inset-0 z-0">
              <PaperAnimation />
            </div>
          </div>
        </Container>
      </section>
  );
}
