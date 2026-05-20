import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  // {
  //   title: 'Quickstart',
  //   slug: '/element-iii-mk2/quickstart',
  //   description: 'Get up and running with your Element III Mk 2.',
  //   icon: '🚀',
  // },
  // {
  //   title: 'Manuals',
  //   slug: '/element-iii-mk2/manuals',
  //   description: 'Complete user manual and reference documentation.',
  //   icon: '📖',
  // },
  {
    title: 'Knob Repair',
    slug: '/element-iii-mk2/knob-repair',
    description: 'Step-by-step guide to repair or replace the volume knob',
    difficulty: 'Advanced' as const,
    time: '15 min',
    icon: '🔧',
    hasVideo: true,
  },
  {
    title: 'Board Swap',
    slug: '/element-iii-mk2/board-swap',
    description: 'Replace the main board in your Element III Mk 2',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔌',
    hasVideo: true,
  },
  {
    title: 'Knob Lubrication',
    slug: '/element-iii-mk2/knob-grease',
    description: 'Step-by-step guide to relubricate the volume knob.',
    difficulty: 'Advanced' as const,
    time: '15 min',
    icon: '🛢️',
    hasVideo: true,
  },
];

export default function ElementIIIMk2() {
  return (
    <ProductPage
      name="Element III Mk 2"
      description="Desktop DAC/Amp"
      image="/img/products/element-iii-mk2.jpg"
      guides={guides}
    />
  );
}
