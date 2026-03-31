import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Quickstart',
    slug: '/element-iii-mk2/quickstart',
    description: 'Get up and running with your Element III Mk 2.',
    icon: '🚀',
  },
  {
    title: 'Manuals',
    slug: '/element-iii-mk2/manuals',
    description: 'Complete user manual and reference documentation.',
    icon: '📖',
  },
  {
    title: 'Troubleshooting',
    slug: '/element-iii-mk2/troubleshooting',
    description: 'Common issues and solutions.',
    difficulty: 'Easy' as const,
    time: '10 min',
    icon: '🔍',
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
