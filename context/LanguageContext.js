import React, { createContext, useContext, useEffect, useState } from "react";
import localesDe from "../locales/de.json";
import localesEn from "../locales/en.json";

// Context erstellen
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("de"); // Standard: Deutsch
  const translations = language === "de" ? localesDe : localesEn;

  // Sprache beim Laden der Seite aus `localStorage` abrufen
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Sprache wechseln & in `localStorage` speichern
  const toggleLanguage = () => {
    const newLanguage = language === "de" ? "en" : "de";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook für einfacheren Zugriff
export function useLanguage() {
  return useContext(LanguageContext);
}
