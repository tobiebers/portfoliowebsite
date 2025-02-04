import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & Einleitung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.portfolio.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.portfolio.description"]}</p>
          </Col>
        </Row>

        {/* Bild */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <Image
              src="/marketmaven/portfolio.png" // Pfad zum Portfolio-Bild ersetzen
              alt={t["marketmaven.portfolio.imageAlt"]}
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
