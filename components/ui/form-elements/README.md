# Form Elements

This directory contains all form-related UI components for the Gradebox landing page.

## Components

### Basic Form Components
- **`Input`** - Standard text input field
- **`Label`** - Form label component
- **`Select`** - Dropdown select component with full Shadcn/UI implementation
- **`Textarea`** - Multi-line text input

### Floating Label Components
- **`FloatingInput`** - Text input with animated floating label
- **`FloatingSelect`** - Select dropdown with animated floating label
- **`FloatingTextarea`** - Textarea with animated floating label

## Usage

### Import from Index
```tsx
import { 
  FloatingInput, 
  FloatingSelect, 
  FloatingTextarea,
  Input,
  Label,
  Select,
  Textarea 
} from '@/components/ui/form-elements';
```

### Individual Imports
```tsx
import { FloatingInput } from '@/components/ui/form-elements/floating-input';
```

## Features

- **Floating Labels**: Custom animated labels that move when focused/filled
- **Shadcn/UI Integration**: Select component uses full Shadcn/UI implementation
- **Responsive Design**: All components are mobile-first and responsive
- **TypeScript Support**: Full type safety for all props and events
- **Custom Styling**: Tailwind CSS with custom color schemes and animations

## Styling

All floating label components use:
- **Background**: `#F8F6EE` (light beige)
- **Text Color**: `#44423F` (dark gray)
- **Font**: Silka font family
- **Border Radius**: `rounded-md`
- **Transitions**: Smooth 200ms animations
