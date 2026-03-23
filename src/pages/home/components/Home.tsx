import { useEffect, useRef } from "react";
import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";
import Footnote from "./footnote/Footnote";
import CersCards from "./network-info/section/cers-cards/CersCards";
import { WaveBottom } from "@/components/wave-divider";

interface HomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function Home({
  showForm,
  setShowForm,
  showFlow,
  setShowFlow,
}: HomeProps) {
  const prevShowFlow = useRef(showFlow[0]);

  useEffect(() => {
    if (prevShowFlow.current && !showFlow[0]) {
      setTimeout(() => {
        document.getElementById("cers-card")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
    prevShowFlow.current = showFlow[0];
  }, [showFlow[0]]);

  if (showFlow[0]) {
    return (
      <div>
        <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
      </div>
    );
  }

  return (
    <div>
      <Welcome showForm={showForm} setShowForm={setShowForm} />
      {!showForm && (
        <>
          <WaveBottom color="var(--cor-bg-1)" />
          <NetworkInfo showFlow={showFlow} setShowFlow={setShowFlow} />
          <Footnote />
        </>
      )}
    </div>
  );
}
