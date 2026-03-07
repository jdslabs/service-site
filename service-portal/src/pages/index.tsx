import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const products = [
  {
    name: 'Element IV',
    slug: '/products/element-iv',
    description: 'Flagship DAC/Amp with Core™',
    guideCount: 4,
    videoCount: 0,
    tags: ['DAC', 'Amp', 'DSP'],
    image: 'https://jdslabs.com/media/cache/43/02/4302a7fb34a39c935136a30b000048ca.jpg',
  },
  {
    name: 'Atom DAC 2',
    slug: '/products/atom-dac-2',
    description: 'High-performance USB DAC',
    guideCount: 3,
    videoCount: 0,
    tags: ['DAC', 'USB'],
    image: '/img/products/atom-dac-2.jpg',
  },
  {
    name: 'Atom Amp 2',
    slug: '/products/atom-amp-2',
    description: 'Desktop headphone amplifier',
    guideCount: 3,
    videoCount: 0,
    tags: ['Amp', 'Headphone'],
    image: '/img/products/atom-amp-2.jpg',
  },
  {
    name: 'Atom Amp+',
    slug: '/products/atom-amp-plus',
    description: 'Desktop headphone amplifier',
    guideCount: 3,
    videoCount: 0,
    tags: ['Amp', 'Headphone'],
    image: '/img/products/atom-amp-plus.jpg',
  },
  {
    name: 'Atom Phono',
    slug: '/products/atom-phono',
    description: 'Phono preamp & tone control',
    guideCount: 3,
    videoCount: 0,
    tags: ['Phono', 'Preamp'],
    image: '/img/products/atom-phono.jpg',
  },
  {
    name: 'Synapse / Synapse Max',
    slug: '/products/synapse',
    description: 'USB isolators',
    guideCount: 3,
    videoCount: 0,
    tags: ['USB', 'Isolator'],
    image: '/img/products/synapse.jpg',
  },
];

function ProductCard({ product }) {
  return (
    <Link to={product.slug} className={styles.productCard}>
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
          {product.guideCount} guides · {product.videoCount} videos
        </div>
        <div className={styles.productTags}>
          {product.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
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
          <span className={styles.heroEyebrow}>service.jdslabs.com</span>
          <h1 className={styles.heroTitle}>Service & Repair Guides</h1>
          <p className={styles.heroSubtitle}>
            Step-by-step manuals and video walkthroughs for JDS Labs products.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Products</h2>
            <span className={styles.sectionSubtitle}>Select a product to browse guides</span>
          </div>
          
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
