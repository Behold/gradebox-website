'use client';

import { useState, useEffect } from 'react';
import HowSectionDesktop from './how-section-desktop';
import HowSectionMobile from './how-section-mobile';

const HowSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <HowSectionMobile /> : <HowSectionDesktop />;
};

export { HowSection };
