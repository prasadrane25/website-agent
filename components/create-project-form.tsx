"use client";

import { useMemo, useState } from "react";
import { createDemoProject } from "@/lib/demo-projects";
import type { CreateProjectInput, DemoProject, FrameworkOption } from "@/types/project";
import styles from "./create-project-form.module.css";

const DEFAULT_FORM: CreateProjectInput = {
  projectName: "My Website",
  designSource: "",
  framework: "Next.js",
  additionalInstructions: "",
};

export function CreateProjectForm() {
  const [form, setForm] = useState<CreateProjectInput>(DEFAULT_FORM);
  const [createdProject, setCreatedProject] = useState<DemoProject | null>(null);
  const [recentProjects, setRecentProjects] = useState<DemoProject[]>([]);

  const canSubmit = useMemo(() => form.projectName.trim().length > 0, [form.projectName]);

  function updateField<K extends keyof CreateProjectInput>(
    key: K,
    value: CreateProjectInput[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    const project = createDemoProject({
      ...form,
      projectName: form.projectName.trim(),
      designSource: form.designSource.trim(),
      additionalInstructions: form.additionalInstructions.trim(),
    });

    setCreatedProject(project);
    setRecentProjects((current) => [project, ...current].slice(0, 5));
  }

  return (
    <section className={`card ${styles.section}`} aria-labelledby="create-project-heading">
      <div className={styles.header}>
        <h2 id="create-project-heading" className="section-title">Create a project</h2>
        <p className="section-copy">
          Capture project details for the upcoming automation pipeline. This form stores
          demo state locally in the browser only.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Project Name</span>
          <input
            type="text"
            value={form.projectName}
            onChange={(event) => updateField("projectName", event.target.value)}
            placeholder="My Website"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Design Source</span>
          <input
            type="url"
            value={form.designSource}
            onChange={(event) => updateField("designSource", event.target.value)}
            placeholder="Paste Figma URL"
          />
        </label>

        <label className={styles.field}>
          <span>Framework</span>
          <select
            value={form.framework}
            onChange={(event) =>
              updateField("framework", event.target.value as FrameworkOption)
            }
          >
            <option value="Next.js">Next.js</option>
            <option value="React">React</option>
          </select>
        </label>

        <label className={styles.field}>
          <span>Additional Instructions</span>
          <textarea
            rows={4}
            value={form.additionalInstructions}
            onChange={(event) => updateField("additionalInstructions", event.target.value)}
            placeholder="Describe any additional requirements..."
          />
        </label>

        <button type="submit" className={styles.submit} disabled={!canSubmit}>
          Create Project
        </button>
      </form>

      {createdProject ? (
        <p className={styles.success} role="status">
          Project created successfully. AI development automation will be connected in the
          next phase.
        </p>
      ) : null}

      {recentProjects.length > 0 ? (
        <div className={styles.recent} id="projects">
          <h3 className={styles.recentTitle}>Recent demo projects</h3>
          <ul className={styles.recentList}>
            {recentProjects.map((project) => (
              <li key={project.id} className={styles.recentItem}>
                <strong>{project.projectName}</strong>
                <span>{project.framework}</span>
                <span>{new Date(project.createdAt).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
