import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceFigmaDesigns() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light py-5">
      <Container>
        {/* Erste Row: Texte */}
        <Row className="mb-4">
          <Col md={12} className="text-start">
            <h2 className="silver">{t["clikce.figma.title"]}</h2>
            <p className="text-secondary">{t["clikce.figma.description"]}</p>
          </Col>
        </Row>

        {/* Zweite Row: Bild */}
        <Row>
          <Col md={12} className="text-center">
            <Image
              src="/clikce/figma-designs.png"
              alt={t["clikce.figma.imageAlt"]}
              fluid
              rounded
              className="shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
