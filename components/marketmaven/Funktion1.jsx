import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function Funktion1() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Überschrift & Beschreibung */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["marketmaven.homepage.title"]}</h2>
            <p className="text-secondary">{t["marketmaven.homepage.description"]}</p>
          </Col>
        </Row>

        {/* Carousel für die Seitenübersicht */}
        <Row className="justify-content-center">
          <Col md={8}> {/* Verkleinertes Carousel */}
            <Carousel>
              {/* Features */}
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="/marketmaven/features.png"
                  alt={t["marketmaven.homepage.featuresAlt"]}
                />
              </Carousel.Item>

              {/* Pricing */}
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="/marketmaven/pricing.png"
                  alt={t["marketmaven.homepage.pricingAlt"]}
                />
              </Carousel.Item>

              {/* Coming Soon */}
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="/marketmaven/landing.png"
                  alt={t["marketmaven.homepage.comingSoonAlt"]}
                />
              </Carousel.Item>

              {/* Kontakt */}
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="/marketmaven/contact.png"
                  alt={t["marketmaven.homepage.contactAlt"]}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
