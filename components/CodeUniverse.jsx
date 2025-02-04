import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren

export default function CodeUniverse() {
  const { t } = useLanguage(); // Sprache aus Context holen

  return (
    <div className="code-universe-section text-center py-5">
      <div className="container">
        <h2 className="gradient-text mb-4">{t["codeUniverse.title"]}</h2>

        <div className="row justify-content-around">
          <div className="col-auto">
            <div className="code-icon-container">
              <img src="/icons/icons8-python.svg" alt="Python" className="code-icon" />
            </div>
          </div>

          <div className="col-auto">
            <div className="code-icon-container">
              <img src="/icons/icons8-html.svg" alt="HTML5" className="code-icon" />
            </div>
          </div>

          <div className="col-auto">
            <div className="code-icon-container">
              <img src="/icons/icons8-js.svg" alt="JavaScript" className="code-icon" />
            </div>
          </div>

          <div className="col-auto">
            <div className="code-icon-container">
              <img src="/icons/icons8-php.svg" alt="PHP" className="code-icon" />
            </div>
          </div>

          <div className="col-auto">
            <div className="code-icon-container">
              <img src="/icons/icons8-css.svg" alt="CSS3" className="code-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
