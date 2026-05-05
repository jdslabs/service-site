import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

const guides = [
  {
    title: 'Manuals',
    slug: '/atom-phono/manuals',
    description: 'Complete specifications and reference documentation.',
    icon: '📖',
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
