import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfCersAndDeficiencies from "./section/TypesOfCersAndDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";

export default function NetworkInfo() {
  return (
    <div id="network-info" className="mx-auto">
      <div className="bg-[var(--cor-2)]">
        <WhatIsRCPD />
      </div>
      <div className="bg-[var(--cor-7)]">
        <HistoryTimeline />
      </div>
      <div className="bg-[var(--cor-2)]">
        <AttentionLevel />
      </div>
      <div className="bg-[var(--cor-7)]">
        <TypesOfCersAndDeficiencies />
      </div>
      <div className="bg-[var(--cor-2)]">
        <ProfessionalsRoles />
      </div>
    </div>
  );
}
