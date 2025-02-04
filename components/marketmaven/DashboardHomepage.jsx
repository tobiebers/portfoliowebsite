import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function DashboardDescription() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & Einleitung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.dashboard.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.dashboard.description"]}</p>
          </Col>
        </Row>

        {/* Bild des Dashboards */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <Image
              src="/marketmaven/s-l1600.png" // Pfad zum Bild ersetzen
              alt={t["marketmaven.dashboard.imageAlt"]}
              fluid
              rounded
              className="shadow"
              style={{ maxWidth: "75%", height: "auto" }} // Bildgröße reduziert
            />
          </Col>
        </Row>

        {/* Beschreibung der Navigation und Quicklinks */}
        <Row>
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.dashboard.navigationTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.dashboard.navigationDescription"]}</p>
          </Col>
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.dashboard.quicklinksTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.dashboard.quicklinksDescription"]}</p>
          </Col>
        </Row>

        {/* Beschreibung des Kalenders und Tickers */}
        <Row className="mt-4">
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.dashboard.calendarTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.dashboard.calendarDescription"]}</p>
          </Col>
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.dashboard.tickerTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.dashboard.tickerDescription"]}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
