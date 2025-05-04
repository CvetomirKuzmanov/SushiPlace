import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/FishLogo.png"
                alt="Sakura Logo"
                fill
                className={styles.logoImage}
                priority // optional, helps preload important images like logos
              />
            </Link>
          </div>
          <nav className={styles.mainNav}>
            <ul>
              <li>
                <Link
                  href="/FishLogo.png"
                  className={styles.active}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.navButton}>
            <Link href="/login" className={styles.btnPrimary}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
