import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function TradingTerminalDescription() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & Einleitung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.tradingTerminal.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.tradingTerminal.description"]}</p>
          </Col>
        </Row>

        {/* Bild des Trading Terminals */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <Image
              src="/marketmaven/trading.png" // Pfad zum Trading Terminal Bild ersetzen
              alt={t["marketmaven.tradingTerminal.imageAlt"]}
              fluid
              rounded
              className="shadow"
              style={{ maxWidth: "75%", height: "auto" }}
            />
          </Col>
        </Row>

        {/* Beschreibung der Funktionen */}
        <Row>
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.tradingTerminal.chartTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.tradingTerminal.chartDescription"]}</p>

            <h4 className="text-gold mt-4">{t["marketmaven.tradingTerminal.apiTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.tradingTerminal.apiDescription"]}</p>
          </Col>
          <Col md={6} className="text-start">
            <h4 className="text-gold">{t["marketmaven.tradingTerminal.backtesterTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.tradingTerminal.backtesterDescription"]}</p>

            <h4 className="text-gold mt-4">{t["marketmaven.tradingTerminal.diagramTitle"]}</h4>
            <p className="text-secondary">{t["marketmaven.tradingTerminal.diagramDescription"]}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
