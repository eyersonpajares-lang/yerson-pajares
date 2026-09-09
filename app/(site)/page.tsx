import { Hero } from "@/sections/Hero";
import { FeaturedExperience } from "@/sections/FeaturedExperience";
import { PersonalProjectsPreview } from "@/sections/PersonalProjectsPreview";
import { LatestIdeas } from "@/sections/LatestIdeas";
import { Contact } from "@/sections/Contact";
import { getPublicProjects } from "@/lib/supabase/queries/projects";

export default async function Home() {
  const projects = await getPublicProjects();

  return (
    <>
      <Hero />
      <FeaturedExperience />
      <PersonalProjectsPreview projects={projects} />
      <LatestIdeas />
      <Contact />
    </>
  );
}
