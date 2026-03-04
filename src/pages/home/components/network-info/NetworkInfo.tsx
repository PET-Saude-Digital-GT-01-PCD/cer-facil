import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfCersAndDeficiencies from "./section/TypesOfCersAndDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";
import CersCards from "./section/CersCards";

interface NetworkInfoProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function NetworkInfo({
  showFlow,
  setShowFlow,
}: NetworkInfoProps) {
  return (
    <div id="network-info" className="container mx-auto p-8">
      <WhatIsRCPD />
      <AttentionLevel />
      <TypesOfCersAndDeficiencies />
      <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
      <HistoryTimeline />
      <ProfessionalsRoles />
    </div>
  );
}
