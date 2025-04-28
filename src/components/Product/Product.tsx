'use client'

import styles from './DishCard.module.css';
import { Product } from '@/types/Product';

const ProductCard = () => {
    return (
        <div className={styles.dishCard}>
            <div className={styles.dishImage}>
                <img src="images/dish4.jpg" alt="Salmon Teriyaki" />
            </div>
            <div className={styles.dishContent}>
                <h3 className={styles.dishName}>Salmon Teriyaki</h3>
                <p className={styles.dishDescription}>
                    Grilled salmon filet glazed with our house-made teriyaki sauce, served with steamed rice and vegetables.
                </p>
                <div className={styles.dishFooter}>
                    <span className={styles.dishPrice}>$27.50</span>
                    <a href="#" className={`${styles.btn} ${styles.btnSm}`}>Order Now</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
