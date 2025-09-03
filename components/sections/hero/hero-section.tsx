"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Hand } from 'lucide-react';
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { PROFILE_IMAGES } from '@/constants/images';

export function HeroSection() {
  // Register GSAP ScrollTo plugin
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToJoin = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: "#join-section",
      ease: "expo.out"
    });
  };

  return (
    <section className="relative h-screen bg-[#01092A] text-white">
        <Container className="relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start">
                <Logo height={48} showOutline={false}/>
              </div>

              {/* Main Heading */}
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[120%] text-white'>
                Transform Paper Assignments into Your Digital Gradebook
              </h1>
              
              {/* Subtitle */}
              <p className="text-md sm:text-md lg:text-xl text-white/90 max-w-2xl leading-tight sm:leading-relaxed lg:leading-relaxed mx-auto lg:mx-0">
                GradeBox is an intelligent grading platform that bridges the gap between handwritten student assignments and modern digital classrooms.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToJoin}
                  className="text-lg px-12 py-8 bg-[#054BC1] font-bold text-white font-semibold rounded-full transform hover:scale-105 hover:bg-[#054BC1]/90 transition-all duration-200 flex items-center gap-2"
                >
                  <Hand className="w-5 h-5" />
                  Join the waitlist
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <AvatarCircles
                  numPeople={12}
                  avatarUrls={[
                    PROFILE_IMAGES.photo1,
                    PROFILE_IMAGES.photo2,
                    PROFILE_IMAGES.photo3,
                    PROFILE_IMAGES.photo4,
                    PROFILE_IMAGES.photo5,
                    PROFILE_IMAGES.photo6,
                  ]}
                  className="flex-shrink-0"
                />
              </div>
              <p className="text-white/80 text-sm text-center sm:text-left">Be part of the movement helping teachers reclaim their time.</p>
            </div>

            {/* Right Content - Removed Paper Animation */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Animation removed - space available for future content */}
            </div>
          </div>
        </Container>
      </section>
  );
}
