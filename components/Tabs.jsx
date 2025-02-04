import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Hero from "./Hero";
import CodeUniverse from "@/components/CodeUniverse";
import ProjectsIntro from "@/components/ProjectsIntro";
import LargeProjects from "@/components/LargeProjects";
import SmallProjects from "@/components/SmallProjects";
import CreativeTabContent from "@/components/CreativeTabContent";
import Hobbys from "@/components/Hobbys";
import AnimatedKeywords from "@/components/AnimatedKeywords";
import ExpertiseSection from "@/components/ExpertiseSection";

export default function Tabs({ activeTab, setActiveTab }) {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-bg-image",
      activeTab === "beruflich" ? "url('/background1.png')" : "url('/background2.png')"
    );
  }, [activeTab]);

  return (
    <div>
      <div className="tab-content mt-4">
        {activeTab === "beruflich" && (
          <div className="tab-pane active text-center">
            <Hero />
            <CodeUniverse />
            <ExpertiseSection />
            <ProjectsIntro />
            <LargeProjects />
            <SmallProjects />
            <AnimatedKeywords />
          </div>
        )}

        {activeTab === "kreativ" && (
          <div className="tab-pane active">
            <div className="container-fluid my-5">
              <h2 className="text-gold text-center mb-4">{t["tabs.welcome"]}</h2>
              <div className="text-center mb-4">
                <button className="btn btn-outline-light" onClick={() => setActiveTab("beruflich")}>
                  {t["button.toggleMode"]}
                </button>
              </div>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <CreativeTabContent />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
