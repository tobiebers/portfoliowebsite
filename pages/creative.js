import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CreativeTabContent from "@/components/CreativeTabContent";
import Hobbys from "@/components/Hobbys";

export default function Creative() {
  const { t } = useLanguage();
  const [showHobbys, setShowHobbys] = useState(false);

  return (
    <div className="container my-5">
      <h1 className="text-center gradient-text">{t["tabs.welcome"]}</h1>

      <div className="text-center mb-4">
        <button
          className="btn btn-outline-light"
          onClick={() => setShowHobbys(!showHobbys)}
        >
          {showHobbys ? t["button.toggleMode.creative"] : t["button.toggleMode.simple"]}
        </button>
      </div>

      <div className="row align-items-center">
        <div className="col-md-12">
          {showHobbys ? <Hobbys /> : <CreativeTabContent />}
        </div>
      </div>
    </div>
  );
}
