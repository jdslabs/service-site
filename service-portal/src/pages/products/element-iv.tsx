import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/element-iv/quickstart',
    description: 'Get up and running with your Element IV in minutes.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/element-iv/manuals',
    description: 'Complete user manual and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Firmware Update',
    slug: '/element-iv/firmware-update',
    description: 'How to update Element IV firmware using the Core™ app.',
    difficulty: 'Easy' as const,
    time: '2 min',
    icon: '⬆️',
  },
  {
    title: 'Knob Repair',
    slug: '/element-iv/knob-repair',
    description: 'Step-by-step guide to replace or repair the volume knob.',
    difficulty: 'Moderate' as const,
    time: '20 min',
    icon: '🔧',
  },
  {
    title: 'Board Swap',
    slug: '/element-iv/board-swap',
    description: 'Replace the main board in your Element IV.',
    difficulty: 'Advanced' as const,
    time: '30 min',
    icon: '🔌',
    hasVideo: true,
  },
];

export default function ElementIV() {
  return (
    <ProductPage
      name="Element IV"
      description="Flagship desktop DAC/Amp with Core™ integration"
      image="https://jdslabs.com/media/cache/43/02/4302a7fb34a39c935136a30b000048ca.jpg"
      guides={guides}
    />
  );
}
