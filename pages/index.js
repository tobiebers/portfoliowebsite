import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Hero from "@/components/Hero";
import CodeUniverse from "@/components/CodeUniverse";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsIntro from "@/components/ProjectsIntro";
import LargeProjects from "@/components/LargeProjects";
import SmallProjects from "@/components/SmallProjects";
import AnimatedKeywords from "@/components/AnimatedKeywords";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Hero />
      <CodeUniverse />
      <ExpertiseSection />
      <ProjectsIntro />
      <LargeProjects />
      <SmallProjects />
      <AnimatedKeywords />
    </div>
  );
}
