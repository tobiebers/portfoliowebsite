import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function BacktesterDescription() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & allgemeine Beschreibung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.backtester.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.backtester.description"]}</p>
          </Col>
        </Row>

        {/* Erster Bereich: Backtester Eingabeansicht */}
        <Row className="mb-5 align-items-center">
          {/* Bild links */}
          <Col md={6} className="text-center">
            <Image
              src="/marketmaven/backtester.png"  // Pfad zum ersten Bild ersetzen
              alt={t["marketmaven.backtester.image1.alt"]}
              fluid
              rounded
              className="shadow"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          {/* Text rechts */}
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.backtester.image1.title"]}</h4>
            <p className="text-secondary">{t["marketmaven.backtester.image1.description"]}</p>
          </Col>
        </Row>

        {/* Zweiter Bereich: Backtest Analyseansicht */}
        <Row className="mb-5 align-items-center">
          {/* Text links */}
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.backtester.image2.title"]}</h4>
            <p className="text-secondary">{t["marketmaven.backtester.image2.description"]}</p>
          </Col>
          {/* Bild rechts */}
          <Col md={6} className="text-center">
            <Image
              src="/marketmaven/analyse.png"  // Pfad zum zweiten Bild ersetzen
              alt={t["marketmaven.backtester.image2.alt"]}
              fluid
              rounded
              className="shadow"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
