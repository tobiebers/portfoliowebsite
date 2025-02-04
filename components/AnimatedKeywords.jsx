import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee"; // Marquee-Paket importieren
import { useLanguage } from "../context/LanguageContext"; // Sprache importieren
import keywords from "../locales/keywords.json"; // JSON mit Wörtern

export default function AnimatedCodeTicker() {
  const { t } = useLanguage(); // Sprache aus Context holen
  const [tickerText, setTickerText] = useState([]);

  useEffect(() => {
    // Wörter aus der JSON-Datei verdoppeln für Endlosschleife
    const words = keywords.keywords.concat(keywords.keywords);
    setTickerText(words);
  }, []);

  return (
    <div className="container ticker-container mt-5 mb-5">
      <h2 className="gradient-text mb-4">
        {t["animatedKeywords.title"].split(" ").map((word, index) => (
          <span key={index}>
            {word === t["animatedKeywords.highlight"] ? (
              <span className="text-gold">{word}</span>
            ) : (
              `${word} `
            )}
          </span>
        ))}
      </h2>

      {/* Fade-Effekt Wrapper */}
      <div className="ticker-fade-wrapper">
        <Marquee speed={50} gradient={false} pauseOnHover={true} className="marquee-text">
          {tickerText.map((word, index) => (
            <div key={index} className="marquee-box">
              {word}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
