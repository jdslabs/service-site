import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './ProductPage.module.css';

export interface Guide {
  title: string;
  slug: string;
  description: string;
  difficulty?: 'Easy' | 'Moderate' | 'Advanced';
  time?: string;
  icon?: string;
  hasVideo?: boolean;
}

export interface ProductPageProps {
  name: string;
  description: string;
  image: string;
  guides: Guide[];
}

function getDifficultyClass(difficulty: string) {
  switch (difficulty) {
    case 'Easy': return styles.difficultyEasy;
    case 'Advanced': return styles.difficultyAdvanced;
    default: return styles.difficultyModerate;
  }
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link to={guide.slug} className={styles.guideCard}>
      <div className={styles.guideIcon}>{guide.icon || '📄'}</div>
      <div className={styles.guideInfo}>
        <h3 className={styles.guideTitle}>{guide.title}</h3>
        <p className={styles.guideDescription}>{guide.description}</p>
        <div className={styles.guideMeta}>
          {guide.difficulty && (
            <span className={`${styles.difficulty} ${getDifficultyClass(guide.difficulty)}`}>
              {guide.difficulty}
            </span>
          )}
          {guide.time && (
            <span className={styles.guideTime}>⏱ {guide.time}</span>
          )}
          {guide.hasVideo && (
            <span className={styles.guideVideo}>▶ Video</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function ProductPage({ name, description, image, guides }: ProductPageProps): JSX.Element {
  return (
    <Layout
      title={`${name} Guides`}
      description={`Service and repair guides for ${name}`}
    >
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>← All Products</Link>
          <div className={styles.productHeader}>
            <div className={styles.productImage}>
              <img src={image} alt={name} />
            </div>
            <div>
              <h1 className={styles.productName}>{name}</h1>
              <p className={styles.productDescription}>{description}</p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.guideGrid}>
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
