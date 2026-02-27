import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";
import Footnote from "./footnote/Footnote";
// Adicione esta linha (ajuste o caminho se necessário):
import CersCards from "./network-info/section/CersCards";

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
  // Quando showFlow[0] é true, o React precisa saber o que é <CersCards />
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
          {/* Aqui ele é renderizado via NetworkInfo */}
          <NetworkInfo showFlow={showFlow} setShowFlow={setShowFlow} />
          <Footnote />
        </>
      )}
    </div>
  );
}
