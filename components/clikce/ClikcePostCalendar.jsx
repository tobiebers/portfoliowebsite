import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikcePostCalendar() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        {/* Titel & Beschreibung übereinander */}
        <div className="text-start mb-4">
          <h2 className="silver">{t["clikce.postCalendar.title"]}</h2>
          <p className="text-secondary">{t["clikce.postCalendar.description"]}</p>
        </div>

        {/* Zweite Reihe: Text links, Bild rechts */}
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h5 className="silver">{t["clikce.postCalendar.mainFunctions"]}</h5>

            <h5 className="text-gold">{t["clikce.postCalendar.planningTitle"]}</h5>
            <p className="text-secondary">{t["clikce.postCalendar.planningDescription"]}</p>

            <h5 className="text-gold">{t["clikce.postCalendar.overviewTitle"]}</h5>
            <p className="text-secondary">{t["clikce.postCalendar.overviewDescription"]}</p>
          </Col>

          {/* Bildbereich */}
          <Col md={6} className="text-center">
            <Image
              src="/clikce/post-calendar.png"
              alt={t["clikce.postCalendar.imageAlt"]}
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
