import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceAnalysisPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        {/* Erste Reihe: Text links, Bild rechts */}
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h2 className="silver">{t["clikce.analysis.title"]}</h2>
            <p className="text-secondary">{t["clikce.analysis.description"]}</p>

            {/* Hauptfunktionen */}
            <h4 className="silver">{t["clikce.analysis.functionsTitle"]}</h4>

            <h5 className="text-gold">{t["clikce.analysis.function1.title"]}</h5>
            <p className="text-secondary">{t["clikce.analysis.function1.description"]}</p>

            <h5 className="text-gold">{t["clikce.analysis.function2.title"]}</h5>
            <p className="text-secondary">{t["clikce.analysis.function2.description"]}</p>

            <h5 className="text-gold">{t["clikce.analysis.function3.title"]}</h5>
            <p className="text-secondary">{t["clikce.analysis.function3.description"]}</p>
          </Col>

          {/* Rechter Bereich - Bild */}
          <Col md={6} className="text-center">
            <Image
              src="/clikce/analysis-diagram.png"
              alt={t["clikce.analysis.imageAlt"]}
              fluid
              rounded
              className="shadow w-75"
            />
          </Col>
        </Row>

        {/* Zweite Reihe: Zwei Bilder nebeneinander */}
        <Row className="mt-4">
          <Col md={6} className="text-center">
            <Image
              src="/clikce/Klassendiagram.png"
              alt={t["clikce.analysis.imageAlt1"]}
              fluid
              rounded
              className="shadow w-75"
            />
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="/clikce/flowchart.png"
              alt={t["clikce.analysis.imageAlt2"]}
              fluid
              rounded
              className="shadow w-75"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
