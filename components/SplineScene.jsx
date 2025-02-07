import React, { useEffect, useState } from "react";

export default function SplineScene() {
  const [height, setHeight] = useState("70vh");
  const [isLoading, setIsLoading] = useState(true); // Zustand für den Ladeindikator

  useEffect(() => {
    // Prüfen, ob das Script bereits eingebunden wurde
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
      document.body.appendChild(script);
    }

    // Dynamische Höhe basierend auf der Fensterbreite
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setHeight("35vh");
      } else if (window.innerWidth < 768) {
        setHeight("50vh");
      } else {
        setHeight("70vh");
      }
    };

    // Initiale Höhe setzen und Event Listener hinzufügen
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fallback: Nach 3 Sekunden den Ladezustand beenden, falls onLoad nicht ausgelöst wird
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
    <div style={{ width: "100%", height, position: "relative" }}>
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
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Wird geladen...</p>
        </div>
      )}

      {/* Spline-Viewer */}
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
  );
}
