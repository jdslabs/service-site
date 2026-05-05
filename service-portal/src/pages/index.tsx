import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const products = [
  {
    name: 'Element IV',
    slug: '/products/element-iv',
    docsSlug: '/element-iv',
    description: 'Flagship DAC/Amp with Core™',
    guideCount: 3,
    image: 'https://jdslabs.com/media/cache/43/02/4302a7fb34a39c935136a30b000048ca.jpg',
    hasQuickstart: true,
  },
  {
    name: 'Element III Mk 2',
    slug: '/products/element-iii-mk2',
    docsSlug: '/element-iii-mk2',
    description: 'Desktop DAC/Amp',
    guideCount: 1,
    image: '/img/products/element-iii-mk2.jpg',
    hasQuickstart: true,
  },
  {
    name: 'Atom DAC 2',
    slug: '/products/atom-dac-2',
    docsSlug: '/atom-dac-2',
    description: 'High-performance USB DAC',
    guideCount: 0,
    image: '/img/products/atom-dac-2.jpg',
    hasQuickstart: false,
  },
  {
    name: 'Atom Amp 2',
    slug: '/products/atom-amp-2',
    docsSlug: '/atom-amp-2',
    description: 'Desktop headphone amplifier',
    guideCount: 1,
    image: '/img/products/atom-amp-2.jpg',
    hasQuickstart: false,
  },
  {
    name: 'Atom Amp+',
    slug: '/products/atom-amp-plus',
    docsSlug: '/atom-amp-plus',
    description: 'Desktop headphone amplifier',
    guideCount: 1,
    image: '/img/products/atom-amp-plus.jpg',
    hasQuickstart: false,
  },
  {
    name: 'Atom Phono',
    slug: '/products/atom-phono',
    docsSlug: '/atom-phono',
    description: 'Phono preamp & tone control',
    guideCount: 0,
    image: '/img/products/atom-phono.jpg',
    hasQuickstart: false,
  },
  // {
  //   name: 'Synapse / Synapse Max',
  //   slug: '/products/synapse',
  //   docsSlug: '/synapse',
  //   description: 'USB isolators',
  //   guideCount: 1,
  //   image: '/img/products/synapse.jpg',
  // },
];

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <Link to={product.slug} className={styles.productCardLink}>
        <div className={styles.productImage}>
          <img 
            src={product.image} 
            alt={product.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.innerHTML = '📦';
            }}
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.productMeta}>
            {product.guideCount >= 1 
              ? `${product.guideCount} ${product.guideCount === 1 ? 'guide' : 'guides'}`
              : '\u00A0'}
          </div>
        </div>
      </Link>
      <div className={styles.productActions}>
        {product.hasQuickstart && (
          <Link to={`${product.docsSlug}/quickstart`} className={styles.actionButton}>
            Quickstart
          </Link>
        )}
        <Link to={`${product.docsSlug}/manuals`} className={styles.actionButton}>
          Manuals
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Service & Repair Guides"
      description="Step-by-step service and repair guides for JDS Labs products"
    >
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Service & Repair Guides</h1>
          <p className={styles.heroSubtitle}>
            Step-by-step manuals and video walkthroughs for JDS Labs products.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
