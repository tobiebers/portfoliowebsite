import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function WinrateCalculatorDescription() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & Einleitung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.winrateCalculator.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.winrateCalculator.description"]}</p>
          </Col>
        </Row>

        {/* Bild des Winrate Calculators */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <Image
              src="/marketmaven/winrate.png" // Pfad zum Bild ersetzen
              alt={t["marketmaven.winrateCalculator.imageAlt"]}
              fluid
              rounded
              className="shadow"
              style={{ maxWidth: "75%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
