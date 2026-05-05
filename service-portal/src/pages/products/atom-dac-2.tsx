import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Manuals',
    slug: '/atom-dac-2/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
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
