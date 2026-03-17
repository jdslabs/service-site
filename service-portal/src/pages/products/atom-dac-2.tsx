import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/atom-dac-2/quickstart',
    description: 'Get up and running with your Atom DAC 2.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/atom-dac-2/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/atom-dac-2/troubleshooting',
    description: 'Common issues: driver problems, no audio, noise.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔧',
  },
];

export default function AtomDAC2() {
  return (
    <ProductPage
      name="Atom DAC 2"
      description="High-performance USB DAC"
      image="/img/products/atom-dac-2.jpg"
      guides={guides}
    />
  );
}
