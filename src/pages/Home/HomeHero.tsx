"use client";

import styles from "./HomePage.module.css";


export default function HomeHero () {
    return (
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src="/sushi2.jpg"
              alt="Sushi background"
            />
          </div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Experience Authentic Japanese Cuisine
              </h1>
              <p className={styles.heroDescription}>
                Fresh ingredients, masterful preparation, and
                unforgettable flavors await you at Sakura Sushi.
              </p>
              <a href="#" className={styles.heroButton}>
                View Our Menu
              </a>
            </div>
          </div>
        </section>
      );
}
  