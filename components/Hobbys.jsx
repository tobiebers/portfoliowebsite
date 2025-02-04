import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprach-Context importieren

export default function Hobbys() {
  const { t } = useLanguage(); // Sprache aus dem Context holen

  return (
    <div className="container-fluid my-5">
      <h2 className="text-gold text-center mb-4">{t["hobbys.title"]}</h2>
      <div className="row justify-content-center">

        {/* Hobby 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <img src="/images/hobby-3d.jpg" className="card-img-top" alt={t["hobbys.hobby1.title"]} />
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby1.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby1.description"]}</p>
            </div>
          </div>
        </div>

        {/* Hobby 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <img src="/images/hobby-miniature.jpg" className="card-img-top" alt={t["hobbys.hobby2.title"]} />
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby2.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby2.description"]}</p>
            </div>
          </div>
        </div>

        {/* Hobby 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <img src="/images/hobby-fitness.jpg" className="card-img-top" alt={t["hobbys.hobby3.title"]} />
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby3.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby3.description"]}</p>
            </div>
          </div>
        </div>

        {/* Hobby 4 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <img src="/images/hobby-paint.jpg" className="card-img-top" alt={t["hobbys.hobby4.title"]} />
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby4.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby4.description"]}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
