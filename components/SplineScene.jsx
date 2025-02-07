import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprachsteuerung importieren

export default function SplineScene() {
  const [height, setHeight] = useState("70vh");
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Zustand für Mobile-Erkennung
  const { t } = useLanguage(); // Übersetzung aus dem Kontext holen

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
        setHeight("45vh");
      } else if (screenWidth < 768) {
        setHeight("55vh");
      } else {
        setHeight("70vh");
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
    <div style={{ width: "100%", position: "relative" }}>
      {/* Ladeindikator */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            color: "#ffffff",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">{t["loading"]}</span>
          </div>
          <p>{t["loading"]}</p>
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

      {/* Anweisungen nur für Mobilgeräte */}
      {isMobile && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}>
          <p>{t["spline.instruction1"]}</p>
          <p>{t["spline.instruction2"]}</p>
        </div>
      )}
    </div>
  );
}
