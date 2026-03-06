import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfCersAndDeficiencies from "./section/TypesOfCers";
import TypesOfDeficiencies from "./section/TypesOfDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";
import CersCards from "./section/CersCards";
import WaveDivider from "../../../../components/WaveDivider";
import TypesOfCers from "./section/TypesOfCers";

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
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <WhatIsRCPD />
        <WaveDivider
          primaryColor="var(--cor-bg-1)"
          secondaryColor="var(--cor-bg-2)"
        />
      </div>
      <div className=" text-white pt-16">
        <AttentionLevel />
        <WaveDivider primaryColor="" secondaryColor="var(--cor-bg-3)" />
      </div>
      <div className="bg-[var(--cor-bg-3)] text-white pt-16">
        <TypesOfCers />
        <WaveDivider
          primaryColor="var(--cor-bg-3)"
          secondaryColor="var(--cor-bg-1)"
        />
      </div>
      <div className="bg-[var(--cor-br-1)]">
        <TypesOfDeficiencies />
        <WaveDivider
          primaryColor="var(--cor-bg-1)"
          secondaryColor="var(--cor-bg-2)"
        />
      </div>
      <div className="bg-[var(--cor-bg-1)] text-white pt-16">
        <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
        <WaveDivider
          primaryColor="var(--cor-bg-1)"
          secondaryColor="var(--cor-bg-2)"
        />
      </div>
      <div className="bg-[var(--cor-bg-2)] text-white pt-16">
        <HistoryTimeline />
        <WaveDivider
          primaryColor="var(--cor-bg-2)"
          secondaryColor="var(--cor-bg-3)"
        />
      </div>
      <div className="bg-[var(--cor-bg-3)] text-white pt-16">
        <ProfessionalsRoles />
      </div>
    </div>
  );
}
