export type FrameworkOption = "Next.js" | "React";

export type PipelineStageId =
  | "design"
  | "analysis"
  | "development"
  | "qa"
  | "github"
  | "vercel";

export type PipelineStageStatus = "ready" | "connected" | "coming-soon";

export interface PipelineStage {
  id: PipelineStageId;
  label: string;
  status: PipelineStageStatus;
  statusLabel: string;
}

export interface CreateProjectInput {
  projectName: string;
  designSource: string;
  framework: FrameworkOption;
  additionalInstructions: string;
}

export interface DemoProject extends CreateProjectInput {
  id: string;
  createdAt: string;
}
