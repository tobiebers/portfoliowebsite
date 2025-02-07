import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprachsteuerung importieren

export default function SplineScene() {
  const [height, setHeight] = useState("70vh");
  const [isLoading, setIsLoading] = useState(true); // Zustand für den Ladeindikator
  const [isMobile, setIsMobile] = useState(false); // Erkennung von Mobil/Tablet
  const { t } = useLanguage(); // Sprach-Übersetzungen

  useEffect(() => {
    // Prüfen, ob das Script bereits eingebunden wurde
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
      document.body.appendChild(script);
    }

    // Dynamische Höhe und Mobile-Erkennung basierend auf Fenstergröße
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768); // Ist es ein Tablet/Handy?

      if (screenWidth < 576) {
        setHeight("35vh");
      } else if (screenWidth < 768) {
        setHeight("45vh");
      } else {
        setHeight("80vh");
      }
    };

    // Initiale Höhe setzen und Event Listener hinzufügen
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fallback: Nach 1,5 Sekunden den Ladezustand beenden, falls onLoad nicht ausgelöst wird
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Event Listener beim Verlassen entfernen und Timeout bereinigen
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Funktion, um den Ladezustand zu aktualisieren (wird durch Spline's onLoad aufgerufen)
  const handleLoad = () => {
    setIsLoading(false); // Verstecke den Ladeindikator
  };

  return (
    <div className="w-100 position-relative">
      {/* Ladeindikator */}
      {isLoading && (
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">{t["loading"]}</span>
          </div>
          <p className="mt-2">{t["loading"]}</p>
        </div>
      )}

      {/* Spline-Viewer */}
      <div style={{ height }}>
        <spline-viewer
          url="https://prod.spline.design/GxmyMOq7vN9Du5kU/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            border: "none",
          }}
          onLoad={handleLoad} // Aufruf, wenn die Szene geladen ist
        ></spline-viewer>
      </div>

      {/* Zusätzliche Anweisungen nur für Mobilgeräte */}
      {isMobile && (
        <div className="container text-center text-white mt-4 mb-5">
          <p className="mb-2">{t["spline.instruction1"]}</p>
          <p>{t["spline.instruction2"]}</p>
        </div>
      )}
    </div>
  );
}
