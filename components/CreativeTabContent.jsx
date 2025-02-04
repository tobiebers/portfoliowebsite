import React from "react";
import { useLanguage } from "../context/LanguageContext";
import SplineScene from "./SplineScene";

export default function CreativeTabContent() {
  const { t } = useLanguage(); // Übersetzungen aus Context laden

  return (
    <div className="container-fluid my-5">
      {/* Texte oben */}
      <div className="text-center mb-4">
        <p className="text-silver">{t["creativeTab.text1"]}</p>
        <p className="text-silver">{t["creativeTab.text2"]}</p>
        <p className="text-silver">{t["creativeTab.text3"]}</p>
      </div>

      {/* Spline-Szene darunter */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <SplineScene />
        </div>
      </div>
    </div>
  );
}
