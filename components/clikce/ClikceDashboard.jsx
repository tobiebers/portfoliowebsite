import React from "react";
import { Container, Image } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";

export default function ClikceDashboard() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-custom text-light">
      <Container>
        {/* Textbereich (links ausgerichtet) */}
        <div className="text-start">
          <h4 className="silver">{t["clikce.dashboard.title"]}</h4>
          <p className="text-secondary">{t["clikce.dashboard.description"]}</p>

          <h4 className="silver">{t["clikce.dashboard.mainFunctions"]}</h4>

          <h5 className="text-gold">{t["clikce.dashboard.accountSummaryTitle"]}</h5>
          <p className="text-secondary">{t["clikce.dashboard.accountSummaryDescription"]}</p>

          <h5 className="text-gold">{t["clikce.dashboard.performanceOverviewTitle"]}</h5>
          <p className="text-secondary">{t["clikce.dashboard.performanceOverviewDescription"]}</p>

          <h5 className="text-gold">{t["clikce.dashboard.topAccountTitle"]}</h5>
          <p className="text-secondary">{t["clikce.dashboard.topAccountDescription"]}</p>
        </div>

        {/* Bildbereich mit reduzierter Größe */}
        <div className="text-center mt-4">
          <Image
            src="/clikce/Dashboard.png"
            alt={t["clikce.dashboard.imageAlt"]}
            fluid
            rounded
            className="shadow w-75" // Reduziert die Bildgröße auf 75%
          />
        </div>
      </Container>
    </section>
  );
}
