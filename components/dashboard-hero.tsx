import styles from "./dashboard-hero.module.css";

export function DashboardHero() {
  return (
    <section className={styles.hero} id="dashboard">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>AI Website Development Agent</p>
        <h1 className={styles.title}>AI Website Development Agent</h1>
        <p className={styles.description}>
          Turn your website designs into production-ready websites with AI-powered
          development, automated QA, GitHub workflows, and Vercel deployment.
        </p>
      </div>
      <div className={styles.panel} aria-hidden="true">
        <div className={styles.panelRow}>
          <span>Design Input</span>
          <strong>Phase 2</strong>
        </div>
        <div className={styles.panelRow}>
          <span>Code Generation</span>
          <strong>Planned</strong>
        </div>
        <div className={styles.panelRow}>
          <span>Deployment</span>
          <strong>Vercel Preview</strong>
        </div>
      </div>
    </section>
  );
}
