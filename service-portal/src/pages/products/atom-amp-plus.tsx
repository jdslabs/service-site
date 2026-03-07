import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/atom-amp-plus/quickstart',
    description: 'Get up and running with your Atom Amp+.',
    difficulty: 'Easy' as const,
    time: '5 min',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/atom-amp-plus/manuals',
    description: 'Complete specifications and reference documentation.',
    difficulty: 'Easy' as const,
    time: '10 min',
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
