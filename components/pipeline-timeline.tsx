import { PIPELINE_STAGES } from "@/lib/pipeline";
import styles from "./pipeline-timeline.module.css";

export function PipelineTimeline() {
  return (
    <section className={`card ${styles.section}`} aria-labelledby="pipeline-heading">
      <div className={styles.header}>
        <h2 id="pipeline-heading" className="section-title">Project status</h2>
        <p className="section-copy">
          Planned automation pipeline for design-to-deployment workflows. Stages marked
          &quot;Coming Soon&quot; are UI placeholders until the next implementation phases.
        </p>
      </div>

      <ol className={styles.timeline}>
        {PIPELINE_STAGES.map((stage, index) => (
          <li key={stage.id} className={styles.stage}>
            <div className={styles.connector} aria-hidden="true">
              <span className={styles.dot} />
              {index < PIPELINE_STAGES.length - 1 ? <span className={styles.line} /> : null}
            </div>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.stageTitle}>{stage.label}</h3>
                <span className={`${styles.badge} ${styles[stage.status]}`}>
                  {stage.statusLabel}
                </span>
              </div>
              <p className={styles.stageCopy}>
                {stage.status === "coming-soon"
                  ? "Automation for this stage will be added in a future release."
                  : stage.status === "connected"
                    ? "Integration target is identified; full workflow wiring comes later."
                    : "Design input is the first step in the upcoming automation flow."}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
