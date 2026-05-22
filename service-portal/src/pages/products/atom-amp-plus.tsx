import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  // {
  //   title: 'Manuals',
  //   slug: '/atom-amp-plus/manuals',
  //   description: 'Complete specifications and reference documentation.',
  //   icon: '📖',
  // },
  {
    title: 'Main Board Replacement',
    slug: '/atom-amp-plus/board-swap',
    description: 'Replace the main board in your Atom Amp+.',
    difficulty: 'Easy' as const,
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
