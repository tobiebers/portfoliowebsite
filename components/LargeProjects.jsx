import React from "react";
import Link from "next/link"; // Next.js Routing
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function LargeProjects() {
  const { t } = useLanguage(); // Sprache aus Context holen

  return (
    <div className="large-projects-section text-center container mt-5">

      <div className="row justify-content-center">
        {/* Market Maven */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="flip-card with-gold-border">
            <div className="flip-card-inner">
              <div className="flip-card-front text-center">
                <img
                  src="/marketmaven/s-l1600.png"
                  alt={t["largeProjects.project1.title"]}
                  className="card-image"
                />
              </div>
              <div className="flip-card-back text-center">
                <p className="text-silver">{t["largeProjects.project1.description"]}</p>
                <Link href="/MarketMaven" legacyBehavior>
                  <a className="btn btn-learn-more mt-3">{t["button.learnMore"]}</a>
                </Link>

              </div>
            </div>
          </div>
          <div className="card-footer mt-3">
            <h4 className="text-gold">{t["largeProjects.project1.title"]}</h4>
          </div>
        </div>

        {/* Clikce */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="flip-card with-gold-border">
            <div className="flip-card-inner">
              <div className="flip-card-front text-center">
                <img
                  src="/clikce/hero.png"
                  alt={t["largeProjects.project2.title"]}
                  className="card-image"
                />
              </div>
              <div className="flip-card-back text-center">
                <p className="text-silver">{t["largeProjects.project2.description"]}</p>
                <Link href="/Clikce" legacyBehavior>
                  <a className="btn btn-learn-more mt-3">{t["button.learnMore"]}</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="card-footer mt-3">
            <h4 className="text-gold">{t["largeProjects.project2.title"]}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
