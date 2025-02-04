import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function ExpertiseSection() {
  const { t } = useLanguage(); // Sprache aus Context holen
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Aktualisiert die Höhe des Inhalts dynamisch
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const content = [
    { title: t["expertise.python.title"], description: t["expertise.python.description"], icon: "/icons2/python.png" },
    { title: t["expertise.business.title"], description: t["expertise.business.description"], icon: "/icons2/bwl.png" },
    { title: t["expertise.ai.title"], description: t["expertise.ai.description"], icon: "/icons2/ai.png" },
    { title: t["expertise.sql.title"], description: t["expertise.sql.description"], icon: "/icons2/sql.png" },
    { title: t["expertise.html.title"], description: t["expertise.html.description"], icon: "/icons2/css.png" },
    { title: t["expertise.javascript.title"], description: t["expertise.javascript.description"], icon: "/icons2/js.png" },
    { title: t["expertise.php.title"], description: t["expertise.php.description"], icon: "/icons2/php.png" }
  ];

  return (
    <div className="expertise-section container mt-5">
      <div
        className="toggle-header d-flex flex-column align-items-center"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        <div className="toggle-line-wrapper d-flex align-items-center justify-content-center">
          <div className="line"></div>
          <h2 className="toggle-title mx-3">{t["expertise.title"]}</h2>
          <div className="line"></div>
        </div>
        <span className={`toggle-icon mt-2 ${isExpanded ? "expanded" : ""}`}>&#9660;</span>
      </div>

      <div
        className="content-wrapper"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out"
        }}
        ref={contentRef}
      >
        <div className="content mt-4">
          <div className="row justify-content-center">
            {content.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="expertise-card">
                  <div className="icon-wrapper">
                    <img src={item.icon} alt={`${item.title} icon`} />
                  </div>
                  <h3 className="expertise-title">{item.title}</h3>
                  <p className="expertise-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
