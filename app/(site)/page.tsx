import { Hero } from "@/sections/Hero";
import { SelectedWork } from "@/sections/SelectedWork";
import { Now } from "@/sections/Now";
import { Experience } from "@/sections/Experience";
import { Capabilities } from "@/sections/Capabilities";
import { LatestIdeas } from "@/sections/LatestIdeas";
import { LinkedInSection } from "@/sections/LinkedInSection";
import { WorkLog } from "@/sections/WorkLog";
import { Vision } from "@/sections/Vision";
import { BeyondProjects } from "@/sections/BeyondProjects";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { getPublicProjects } from "@/lib/supabase/queries/projects";

export default async function Home() {
  const projects = await getPublicProjects();
  const selectedWork = projects
    .filter((p) => p.type === "selected-work")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero />
      <SelectedWork projects={selectedWork} />
      <Now />
      <Experience />
      <Capabilities />
      <LatestIdeas />
      <LinkedInSection />
      <WorkLog />
      <Vision />
      <BeyondProjects />
      <Education />
      <Contact />
    </>
  );
}
