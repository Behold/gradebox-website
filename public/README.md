# Public Assets Directory

This directory contains all static assets for the Gradebox landing page, organized by type and purpose.

## Directory Structure

### `/fonts/` - Typography
- `Silka-Black.otf` - Silka Black font
- `Silka-Bold.otf` - Silka Bold font
- `Silka-Medium.otf` - Silka Medium font
- `Silka-Regular.otf` - Silka Regular font
- `Silka-SemiBold.otf` - Silka SemiBold font

### `/illustrations/` - Section Illustrations
- `why-illustration.svg` - Why section illustration
- `join-illustration.svg` - Join section illustration
- `grading-illustration.svg` - Grading section illustration

### `/images/` - Image Assets
- `/journey/` - Journey section images
  - `educator-journey.png` - Educator journey image
  - `parents-journey.png` - Parents journey image

### `/profiles/` - Profile Photos
- `avatar-1.png` through `avatar-6.png` - User profile images

### `/stats/` - Statistics Icons
- `balance-icon.svg` - Balance/equilibrium icon
- `clock-icon.svg` - Clock/time icon
- `hourglass-icon.svg` - Hourglass icon
- `lamp-icon.svg` - Lightbulb/idea icon

## Usage

All assets are referenced through the constants file at `constants/images.ts` which provides typed access to all image paths.

## Naming Convention

- **Icons**: `{name}-icon.svg` (e.g., `balance-icon.svg`, `clock-icon.svg`)
- **Profile photos**: `avatar-{number}.png` (e.g., `avatar-1.png`, `avatar-2.png`)
- **Journey images**: `{context}-journey.png` (e.g., `educator-journey.png`, `parents-journey.png`)
- **Section illustrations**: `{section}-illustration.svg` (e.g., `why-illustration.svg`, `join-illustration.svg`)
