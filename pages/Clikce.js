import React from "react";
import ClikceDetail from "@/components/clikce/Detail";
import ClikceSteps from "@/components/clikce/ClikceSteps";
import ClikceFigmaDesigns from "@/components/clikce/ClikceFigmaDesigns";
import ClikceProgrammingManagement from "@/components/clikce/ClikceProgrammingManagemen";
import ClikceLoginRegistration from "@/components/clikce/ClikceLoginRegistration";
import ClikceDashboard from "@/components/clikce/ClikceDashboard";
import ClikcePostCalendar from "@/components/clikce/ClikcePostCalendar";
import ClikcePostFeatures from "@/components/clikce/ClikcePostFeatures";
import ClikceAnalysisPage from "@/components/clikce/ClikceAnalysisPage";


export default function ClikcePage() {
  return (
    <div>
      {/* Detailansicht */}
      <ClikceDetail />

      {/* Schritte-Sektion */}
      <ClikceSteps />
         <ClikceFigmaDesigns />
        <ClikceProgrammingManagement />
        <ClikceLoginRegistration />
        <ClikceDashboard />
         <ClikcePostCalendar />
        <ClikcePostFeatures />
         <ClikceAnalysisPage />
    </div>
  );
}
