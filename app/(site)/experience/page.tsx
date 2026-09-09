import type { Metadata } from "next";
import { ExperienceListClient } from "./ExperienceListClient";

export const metadata: Metadata = {
  title: "Experience",
  description: "What I've worked on — Project Controls, Planning and Construction.",
};

export default function ExperiencePage() {
  return <ExperienceListClient />;
}
