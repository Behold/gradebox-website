export const JOURNEY_IMAGES = {
  educator: '/images/journey/educator-journey.png',
  parents: '/images/journey/parents-journey.png',
} as const;

export const HERO_IMAGES = {
  why: '/illustrations/why-illustration.svg',
} as const;

export const STATS_IMAGES = {
  balance: '/stats/balance-icon.svg',
  clock: '/stats/clock-icon.svg',
  hourglass: '/stats/hourglass-icon.svg',
  lamp: '/stats/lamp-icon.svg',
} as const;

export const PROFILE_IMAGES = {
  photo1: '/profiles/avatar-1.png',
  photo2: '/profiles/avatar-2.png',
  photo3: '/profiles/avatar-3.png',
  photo4: '/profiles/avatar-4.png',
  photo5: '/profiles/avatar-5.png',
  photo6: '/profiles/avatar-6.png',
} as const;

export const OTHER_IMAGES = {
  join: '/illustrations/join-illustration.svg',
  grading: '/illustrations/grading-illustration.svg',
} as const;

export type JourneyImageKey = keyof typeof JOURNEY_IMAGES;
export type HeroImageKey = keyof typeof HERO_IMAGES;
export type StatsImageKey = keyof typeof STATS_IMAGES;
export type ProfileImageKey = keyof typeof PROFILE_IMAGES;
export type OtherImageKey = keyof typeof OTHER_IMAGES;
