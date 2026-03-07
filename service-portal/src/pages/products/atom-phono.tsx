import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/atom-phono/quickstart',
    description: 'Get up and running with your Atom Phono.',
    difficulty: 'Easy' as const,
    time: '5 min',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/atom-phono/manuals',
    description: 'Complete specifications and reference documentation.',
    difficulty: 'Easy' as const,
    time: '10 min',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/atom-phono/troubleshooting',
    description: 'Common issues: hum, grounding, cartridge setup.',
    difficulty: 'Moderate' as const,
    time: '10 min',
    icon: '🔧',
  },
];

export default function AtomPhono() {
  return (
    <ProductPage
      name="Atom Phono"
      description="Low-noise phono preamp with built-in tone control"
      image="/img/products/atom-phono.jpg"
      guides={guides}
    />
  );
}
