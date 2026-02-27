import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";

interface FormData {
  deficiencies: string[];
  ageGroup: string;
  location: string;
  coordinates: { lat: number; lng: number } | null;
  currentStep: number;
}

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [fromFormFlow, setFromFormFlow] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    deficiencies: [],
    ageGroup: "",
    location: "",
    coordinates: null,
    currentStep: 1,
  });

  const handleBackToFormResults = () => {
    setShowFlow([false, 0]);
    setFromFormFlow(false);
  };

  const handleShowFlowFromForm = (show: [boolean, number]) => {
    setShowFlow(show);
    if (show[0]) {
      setFromFormFlow(true);
    }
  };

  return (
    <>
      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={handleShowFlowFromForm}
        fromFormFlow={fromFormFlow}
        onBackToFormResults={handleBackToFormResults}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
