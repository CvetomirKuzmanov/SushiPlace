'use client'

import React from 'react';
import styles from './Footer.module.css';

export default function  Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerLogo}>Sakura</h3>
            <p>123 Sushi Avenue<br />Seattle, WA 98101</p>
            <p>(555) 123-4567</p>
            <p>info@sakurasushi.com</p>
          </div>
          <div className={styles.footerHours}>
            <h4>Hours</h4>
            <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
            <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
            <p>Sunday: 12:00 PM - 9:00 PM</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerNewsletter}>
            <h4>Subscribe</h4>
            <p>Sign up for special offers and events</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Sakura Sushi Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};