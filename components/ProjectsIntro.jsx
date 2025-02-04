import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function ProjectsIntro() {
  const { t } = useLanguage(); // Sprache aus Context holen

  return (
    <div className="projects-intro-section text-center container mt-3">
      {/* Überschrift mit Gradient */}
      <h2 className="gradient-text">{t["projectsIntro.title"]}</h2>

      {/* Beschreibungstext */}
      <p className="text-silver">{t["projectsIntro.description"]}</p>
    </div>
  );
}
