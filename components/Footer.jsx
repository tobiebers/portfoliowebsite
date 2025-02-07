import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Für Sprachsteuerung

export default function Footer() {
  const { t } = useLanguage(); // Sprachsteuerung nutzen

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          {/* Projekte */}
          <div className="footer-column">
            <h3>{t["footer.projects"]}</h3>
            <ul>
              <li>
                <a href="/MarketMaven" target="_blank" rel="noopener noreferrer">
                  MarketMaven
                </a>
              </li>
              <li>
                <a href="/Clikce" target="_blank" rel="noopener noreferrer">
                  Clikce
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-column">
            <h3>{t["footer.contact"]}</h3>
            <ul>
              <li>{t["footer.phone"]}: +49 176 84771804</li>
              <li>{t["footer.email"]}: ebersberger.tobi@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>ebersberger.tobi@gmail.com</p>
          <p>© {new Date().getFullYear()} | {t["footer.copyright"]}</p>
        </div>
      </div>
    </footer>
  );
}
