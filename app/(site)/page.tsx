import { Hero } from "@/sections/Hero";
import { FeaturedExperience } from "@/sections/FeaturedExperience";
import { PersonalProjectsPreview } from "@/sections/PersonalProjectsPreview";
import { LatestIdeas } from "@/sections/LatestIdeas";
import { Contact } from "@/sections/Contact";
import { getPublicProjects } from "@/lib/supabase/queries/projects";
import { getPublicExperiences } from "@/lib/supabase/queries/experiences";

export default async function Home() {
  const [projects, experiences] = await Promise.all([
    getPublicProjects(),
    getPublicExperiences(),
  ]);

  return (
    <>
      <Hero />
      <FeaturedExperience experiences={experiences} />
      <PersonalProjectsPreview projects={projects} />
      <LatestIdeas />
      <Contact />
    </>
  );
}
