import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarketMavenDetail() {
  const { t } = useLanguage();

  const technologies = ["Nextjs", "Python", "Postgresql", "Firebase", "Börsen api"];

  return (
    <div className="marketmaven-detail">
      {/* Sektion mit Hintergrundbild */}
      <section className="background-section">
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Linke Spalte - Text */}
              <div className="col-md-6 text-left text-white">
                <h1 className="text-gold">{t["marketmaven.title"]}</h1>
                <p className="text-silver">{t["marketmaven.description"]}</p>

                {/* Features */}
                <div>
                  <h3 className="text-gold">{t["marketmaven.featuresTitle"]}</h3>
                  <ul className="text-silver">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num}>{t[`marketmaven.feature${num}`]}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologien */}
                <div>
                  <h3 className="text-gold">{t["marketmaven.technologiesTitle"]}</h3>
                  <div>
                    {technologies.map((tech, index) => (
                      <span key={index} className="technology-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rechte Spalte - Bild */}
              <div className="col-md-6 text-center">
                <img
                  src="/marketmaven/s-l1600.png"
                  alt={t["marketmaven.title"]}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
