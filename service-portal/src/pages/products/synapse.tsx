import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/synapse/quickstart',
    description: 'Get up and running with your Synapse.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/synapse/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/synapse/troubleshooting',
    description: 'Common issues: device detection, power requirements.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔧',
  },
];

export default function Synapse() {
  return (
    <ProductPage
      name="Synapse / Synapse Max"
      description="USB isolators for clean, noise-free audio"
      image="/img/products/synapse.jpg"
      guides={guides}
    />
  );
}
