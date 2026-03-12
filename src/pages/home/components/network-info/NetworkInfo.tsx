import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfDeficiencies from "./section/TypesOfDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";
import CersCards from "./section/CersCards";
import { WaveBottom, WaveTop } from "@/components/wave-divider";
import TypesOfCers from "./section/TypesOfCers";
import EducationalMaterial from "./section/EducationalMaterial";

interface NetworkInfoProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function NetworkInfo({
  showFlow,
  setShowFlow,
}: NetworkInfoProps) {
  return (
    <div id="network-info">
      {/* Azul Petróleo */}
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <WhatIsRCPD />
        <WaveBottom color="white" />
      </div>

      {/* Branco */}
      <div className="bg-white pt-16">
        <AttentionLevel />
        <WaveBottom color="var(--cor-bg-1)" />
      </div>

      {/* Azul Petróleo */}
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <TypesOfCers />
        <WaveBottom color="white" />
      </div>

      {/* Branco */}
      <div className="bg-white pt-16">
        <TypesOfDeficiencies />
        <WaveBottom color="var(--cor-bg-1)" />
      </div>

      {/* Azul Petróleo */}
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
        <WaveBottom color="white" />
      </div>

      {/* Branco */}
      <div className="bg-white pt-16">
        <HistoryTimeline />
        <WaveBottom color="var(--cor-bg-1)" />
      </div>

      {/* Azul Petróleo */}
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <ProfessionalsRoles />
        <WaveBottom color="white" />
      </div>

      <div className="bg-white text-white pt-16">
        <EducationalMaterial />
      </div>
    </div>
  );
}
