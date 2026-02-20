import WhatIsRCPD from "./section/WhatIsRCPD";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";

export default function NetworkInfo() {
  return (
    <div id="network-info" className="container mx-auto p-8">
      <WhatIsRCPD />
      <HistoryTimeline />
      <AttentionLevel />
    </div>
  );
}
