import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function Hero() {
  const { t } = useLanguage(); // Sprache aus Context holen

  return (
    <div className="hero-section">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          {/* Linke Spalte */}
          <div className="col-md-6 text-left">
            <h1 className="hero-title text-light-gray">{t["hero.title"]}</h1>
            <h2 className="hero-subtitle text-gold">{t["hero.subtitle"]}</h2>
            <p className="hero-description text-light-gray">
              {t["hero.description"]}
            </p>
          </div>

          {/* Rechte Spalte mit Bild */}
          <div className="col-md-6 d-flex justify-content-center align-items-end hero-image-container">
            <img
              src="/tobi-Photoroom.png"
              alt="Tobi's Portrait"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
