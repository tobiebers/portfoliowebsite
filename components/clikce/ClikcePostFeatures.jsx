import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikcePostFeatures() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        <Row className="align-items-center">
          {/* Linker Bereich - Bild */}
          <Col md={6} className="text-center">
            <Image
              src="/clikce/hashtag.png"
              alt={t["clikce.postFeatures.imageAlt"]}
              fluid
              rounded
              className="shadow w-75"
            />
          </Col>

          {/* Rechter Bereich - Text */}
          <Col md={6} className="text-start">
            <h2 className="silver">{t["clikce.postFeatures.title"]}</h2>

            <div className="feature">
              <h5 className="text-gold">{t["clikce.postFeatures.hashtagTitle"]}</h5>
              <p className="text-secondary">{t["clikce.postFeatures.hashtagDescription"]}</p>
            </div>

            <div className="feature">
              <h5 className="text-gold">{t["clikce.postFeatures.botTitle"]}</h5>
              <p className="text-secondary">{t["clikce.postFeatures.botDescription"]}</p>
            </div>

            <div className="feature">
              <h5 className="text-gold">{t["clikce.postFeatures.captionTitle"]}</h5>
              <p className="text-secondary">{t["clikce.postFeatures.captionDescription"]}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
