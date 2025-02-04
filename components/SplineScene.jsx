import React, { useEffect } from "react";

export default function SplineScene() {
  useEffect(() => {
    // Prüfen, ob das Script bereits eingebunden wurde
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <spline-viewer
        url="https://prod.spline.design/GxmyMOq7vN9Du5kU/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          border: "none",
        }}
      ></spline-viewer>
    </div>
  );
}
