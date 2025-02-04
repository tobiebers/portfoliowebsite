import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="nav-container">
      <div className="nav-wrapper d-flex justify-content-between align-items-center">
        {/* Links zu den Hauptseiten */}
        <ul className="nav">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link">{t["tabs.business"]}</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/creative" legacyBehavior>
              <a className="nav-link">{t["tabs.creative"]}</a>
            </Link>
          </li>
        </ul>

        {/* Sprachumschaltung */}
        <button className="btn-language" onClick={toggleLanguage}>
          {language === "de" ? "Deutsch" : "English"}
        </button>
      </div>
    </nav>
  );
}
