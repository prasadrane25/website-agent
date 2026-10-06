import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="settings">
      <div className={`container ${styles.inner}`}>
        <p>Website Agent foundation dashboard</p>
        <p className={styles.muted}>Settings and integrations will be added in later phases.</p>
      </div>
    </footer>
  );
}
