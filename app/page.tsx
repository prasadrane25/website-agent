import { CreateProjectForm } from "@/components/create-project-form";
import { DashboardHero } from "@/components/dashboard-hero";
import { PipelineTimeline } from "@/components/pipeline-timeline";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="container main-content">
        <DashboardHero />
        <div className="grid-two">
          <CreateProjectForm />
          <PipelineTimeline />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
