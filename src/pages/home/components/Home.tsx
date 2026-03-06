import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";
import Footnote from "./footnote/Footnote";
// Adicione esta linha (ajuste o caminho se necessário):
import CersCards from "./network-info/section/CersCards";
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
          <WaveBottom color="var(--cor-bg-2)" />
          <NetworkInfo showFlow={showFlow} setShowFlow={setShowFlow} />
          <Footnote />
        </>
      )}
    </div>
  );
}
