import React from "react";
import { Container, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceLoginRegistration() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        {/* Textbereich (links ausgerichtet) */}
        <div className="text-start">
          <h5 className="text-gold">{t["clikce.login.title"]}</h5>
          <p className="text-secondary">{t["clikce.login.description"]}</p>

          <h5 className="text-gold">{t["clikce.login.subheading2"]}</h5>
          <p className="text-secondary">{t["clikce.login.description2"]}</p>
        </div>

        {/* Bildbereich */}
        <div className="text-center mt-4">
          <Image
            src="/clikce/1%2051.png"
            alt={t["clikce.login.imageAlt1"]}
            fluid
            rounded
            className="m-1"
          />
          <Image
            src="/clikce/2%2083.png"
            alt={t["clikce.login.imageAlt2"]}
            fluid
            rounded
            className="m-1"
          />
        </div>
      </Container>
    </section>
  );
}
