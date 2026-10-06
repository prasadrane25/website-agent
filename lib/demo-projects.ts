import type { CreateProjectInput, DemoProject } from "@/types/project";

export function createDemoProject(input: CreateProjectInput): DemoProject {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `project-${Date.now()}`;

  return {
    ...input,
    id,
    createdAt: new Date().toISOString(),
  };
}
