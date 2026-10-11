import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Light Ring Repair',
    slug: '/atom-dac-plus/light-ring-repair',
    description: 'Step-by-step guide to repair the light ring.',
    difficulty: 'Easy' as const,
    time: '5 min',
    icon: '💡',
  },
];

export default function AtomDacPlus() {
  return (
    <ProductPage
      name="Atom DAC+"
      description="Desktop USB DAC"
      image="/img/products/atom-dac-plus.jpg"
      guides={guides}
    />
  );
}
