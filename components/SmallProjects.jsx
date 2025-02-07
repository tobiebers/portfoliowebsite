import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function SmallProjects() {
  const { t } = useLanguage(); // Sprache aus Context holen

  return (
    <div className="small-projects-section text-center container mt-5">
      <h2 className="gradient-text mb-5">{t["smallProjects.title"]}</h2>
      <div className="row justify-content-center">
        {/* Karte 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="flip-card with-gold-border">
            <div className="flip-card-inner">
              {/* Vorderseite */}
              <div className="flip-card-front text-center">
                <img
                  src="/hirn.jpg"
                  alt={t["smallProjects.project1.title"]}
                  className="card-image"
                />
              </div>
              {/* Rückseite */}
              <div className="flip-card-back text-center">
                <p className="text-silver">
                  {t["smallProjects.project1.description"]}
                </p>
              </div>
            </div>
          </div>
          {/* Titel und Subüberschrift unter der Karte */}
          <div className="card-footer mt-3">
            <h4 className="text-gold">{t["smallProjects.project1.title"]}</h4>
            <p className="text-silver">
              {t["smallProjects.project1.subtitle"]}
            </p>
          </div>
        </div>

        {/* Karte 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="flip-card with-gold-border">
            <div className="flip-card-inner">
              {/* Vorderseite */}
              <div className="flip-card-front text-center">
                <img
                  src="/heizungsteuerung.png"
                  alt={t["smallProjects.project2.title"]}
                  className="card-image"
                />
              </div>
              {/* Rückseite */}
              <div className="flip-card-back text-center">
                <p className="text-silver">
                  {t["smallProjects.project2.description"]}
                </p>
              </div>
            </div>
          </div>
          {/* Titel und Subüberschrift unter der Karte */}
          <div className="card-footer mt-3">
            <h4 className="text-gold">{t["smallProjects.project2.title"]}</h4>
            <p className="text-silver">
              {t["smallProjects.project2.subtitle"]}
            </p>
          </div>
        </div>

        {/* Karte 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="flip-card with-gold-border">
            <div className="flip-card-inner">
              {/* Vorderseite */}
              <div className="flip-card-front text-center">
                <img
                  src="/bitcoin.jpg"
                  alt={t["smallProjects.project3.title"]}
                  className="card-image"
                />
              </div>
              {/* Rückseite */}
              <div className="flip-card-back text-center">
                <p className="text-silver">
                  {t["smallProjects.project3.description"]}
                </p>
              </div>
            </div>
          </div>
          {/* Titel und Subüberschrift unter der Karte */}
          <div className="card-footer mt-3">
            <h4 className="text-gold">{t["smallProjects.project3.title"]}</h4>
            <p className="text-silver">
              {t["smallProjects.project3.subtitle"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
