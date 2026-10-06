import type { PipelineStage } from "@/types/project";

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "design",
    label: "Design",
    status: "ready",
    statusLabel: "Ready",
  },
  {
    id: "analysis",
    label: "Analysis",
    status: "coming-soon",
    statusLabel: "Coming Soon",
  },
  {
    id: "development",
    label: "Development",
    status: "coming-soon",
    statusLabel: "Coming Soon",
  },
  {
    id: "qa",
    label: "QA",
    status: "coming-soon",
    statusLabel: "Coming Soon",
  },
  {
    id: "github",
    label: "GitHub",
    status: "connected",
    statusLabel: "Connected",
  },
  {
    id: "vercel",
    label: "Vercel",
    status: "connected",
    statusLabel: "Connected",
  },
];
