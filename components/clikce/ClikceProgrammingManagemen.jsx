import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceProgrammingManagement() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        {/* Textbereich (links ausgerichtet) */}
        <div className="text-start">
          <h2 className="silver">{t["clikce.programming.title"]}</h2>
          <p className="text-secondary">{t["clikce.programming.introduction"]}</p>

          <h5 className="text-gold">{t["clikce.programming.subheading1"]}</h5>
          <p className="text-secondary">{t["clikce.programming.description1"]}</p>

          <h5 className="text-gold">{t["clikce.programming.subheading2"]}</h5>
          <p className="text-secondary">{t["clikce.programming.description2"]}</p>

          <h5 className="text-gold">{t["clikce.programming.subheading3"]}</h5>
          <p className="text-secondary">{t["clikce.programming.description3"]}</p>
        </div>

        {/* Bildbereich */}
        <div className="text-center mt-4">
          <Image
            src="/clikce/youtrack-board.png"
            alt={t["clikce.programming.imageAlt"]}
            fluid
            rounded
            className="shadow"
          />
        </div>
      </Container>
    </section>
  );
}
