import Link from 'next/link';
import styles from './Layout.module.css';  // Add your custom styles here

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}
