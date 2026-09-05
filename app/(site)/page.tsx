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

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
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
