export const JOURNEY_IMAGES = {
  educator: '/images/journey/image-journey-educator.png',
  parents: '/images/journey/image-journey-parents.png',
} as const;

export const HERO_IMAGES = {
  why: '/image-why.svg',
} as const;

export type JourneyImageKey = keyof typeof JOURNEY_IMAGES;
export type HeroImageKey = keyof typeof HERO_IMAGES;
