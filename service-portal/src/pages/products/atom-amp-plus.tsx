import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/atom-amp-plus/quickstart',
    description: 'Get up and running with your Atom Amp+.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/atom-amp-plus/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/atom-amp-plus/troubleshooting',
    description: 'Common issues: noise, hum, volume imbalance.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔧',
  },
  {
    title: 'Main Board Replacement',
    slug: '/atom-amp-plus/board-swap',
    description: 'Replace the main board in your Atom Amp+.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔌',
  },
];

export default function AtomAmpPlus() {
  return (
    <ProductPage
      name="Atom Amp+"
      description="Desktop headphone amplifier with exceptional transparency"
      image="/img/products/atom-amp-plus.jpg"
      guides={guides}
    />
  );
}
