"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./site-header.module.css";

const NAV_ITEMS = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#projects", label: "Projects" },
  { href: "#settings", label: "Settings" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark} aria-hidden="true">WA</span>
          <span>Website Agent</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
