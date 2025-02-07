import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Sprach-Context importieren
import Carousel from "react-bootstrap/Carousel"; // Bootstrap-Karussell für Bilder

export default function Hobbys() {
  const { t } = useLanguage(); // Sprache aus dem Context holen

  return (
    <div className="container-fluid my-5">
      <h2 className="text-gold text-center mb-4">{t["hobbys.title"]}</h2>
      <div className="row justify-content-center">

        {/* Hobby 1 - 3D-Modellierung & 3D-Druck (Mit Karussell - 3 Bilder) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <Carousel>
              <Carousel.Item>
                <img src="/hobbys/3ddrucker.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby1.title"]} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/hobbys/GodzillaScreen.png" className="d-block w-100 hobby-image" alt={t["hobbys.hobby1.title"]} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/hobbys/Jet.png" className="d-block w-100 hobby-image" alt={t["hobbys.hobby1.title"]} />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby1.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby1.description"]}</p>
            </div>
          </div>
        </div>

        {/* Hobby 2 - Miniaturen bemalen (Mit Karussell - 2 Bilder) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <Carousel>
              <Carousel.Item>
                <img src="/hobbys/3dfiguren.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby2.title"]} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/hobbys/malen.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby2.title"]} />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby2.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby2.description"]}</p>
            </div>
          </div>
        </div>



        {/* Hobby 4 - Malen/Zeichnen (Mit Karussell - 3 Bilder) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <Carousel>
              <Carousel.Item>
                <img src="/hobbys/zeichnen2.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby4.title"]} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/hobbys/bild.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby4.title"]} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/hobbys/zeichnen.jpg" className="d-block w-100 hobby-image" alt={t["hobbys.hobby4.title"]} />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby4.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby4.description"]}</p>
            </div>
          </div>
        </div>


        {/* Hobby 3 - Fitness (Kein Bild) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title text-gold">{t["hobbys.hobby3.title"]}</h5>
              <p className="card-text text-silver">{t["hobbys.hobby3.description"]}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
