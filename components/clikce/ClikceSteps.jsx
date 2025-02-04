import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceSteps() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom">
      <div>
        <div className="container">
          <div className="row align-items-center">
            {/* Linke Spalte mit Logo */}
            <div className="col-md-6 text-center">
              <img
                src="/clikce/logo.png"
                alt={t["clikce.logoAlt"]}
              />
            </div>

            {/* Rechte Spalte mit den Schritten */}
            <div className="col-md-6">
              <div className="mb-4">
                <h2 className="silver">{t["clikce.steps.step1.title"]}</h2>
                <p className="text-secondary">{t["clikce.steps.step1.description"]}</p>
              </div>
              <div>
                <h2 className="silver">{t["clikce.steps.step2.title"]}</h2>
                <p className="text-secondary">{t["clikce.steps.step2.description"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
