import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/atom-amp-2/quickstart',
    description: 'Get up and running with your Atom Amp 2.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/atom-amp-2/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/atom-amp-2/troubleshooting',
    description: 'Common issues: noise, hum, volume imbalance.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔧',
  },
  {
    title: 'Main Board Replacement',
    slug: '/atom-amp-2/board-swap',
    description: 'Replace the main board in your Atom Amp 2.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔌',
  },
];

export default function AtomAmp2() {
  return (
    <ProductPage
      name="Atom Amp 2"
      description="Desktop headphone amplifier"
      image="/img/products/atom-amp-2.jpg"
      guides={guides}
    />
  );
}
