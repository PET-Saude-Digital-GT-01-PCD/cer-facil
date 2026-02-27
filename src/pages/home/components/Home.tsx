import CersCards from "./cers-cards/CersCards";
import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";
import Footnote from "./footnote/Footnote";

interface HomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  showFlow: boolean;
  setShowFlow: (show: boolean) => void;
  fromFormFlow?: boolean;
  onBackToFormResults?: () => void;
  formData: any;
  setFormData: (data: any) => void;
}

export default function Home({
  showForm,
  setShowForm,
  showFlow,
  setShowFlow,
  fromFormFlow,
  onBackToFormResults,
  formData,
  setFormData,
}: HomeProps) {
  if (showFlow[0]) {
    return (
      <div>
        <CersCards showFlow={showFlow} setShowFlow={setShowFlow} fromForm={fromFormFlow} onBackToForm={onBackToFormResults} />
      </div>
    );
  }
  
  if (showForm) {
    return (
      <div>
        <Welcome showForm={showForm} setShowForm={setShowForm} setShowFlow={setShowFlow} fromFormFlow={fromFormFlow} onBackToFormResults={onBackToFormResults} formData={formData} setFormData={setFormData} />
      </div>
    );
  }
  
  return (
    <div>
      <Welcome showForm={showForm} setShowForm={setShowForm} setShowFlow={setShowFlow} fromFormFlow={fromFormFlow} onBackToFormResults={onBackToFormResults} formData={formData} setFormData={setFormData} />
      <CersCards showFlow={showFlow} setShowFlow={setShowFlow} fromForm={fromFormFlow} onBackToForm={onBackToFormResults} />
      <NetworkInfo />
      <Footnote />
    </div>
  );
}
