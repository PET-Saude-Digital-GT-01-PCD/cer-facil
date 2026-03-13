import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepIndicator from "./step-indicator/StepIndicator";

interface CerFormProps {
  setShowForm: (show: boolean) => void;
}

interface FormData {
  deficiencies: string[];
  ageGroup: string;
  location: string;
  coordinates: { lat: number; lng: number } | null;
}

export default function CerForm({ setShowForm }: CerFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    deficiencies: [],
    ageGroup: "",
    location: "",
    coordinates: null,
  });

  const handleStepOneNext = (selectedDeficiencies: string[]) => {
    setFormData(prev => ({ ...prev, deficiencies: selectedDeficiencies }));
    setCurrentStep(2);
  };

  const handleStepTwoNext = (ageGroup: string) => {
    setFormData(prev => ({ ...prev, ageGroup }));
    setCurrentStep(3);
  };

  const handleStepThreeNext = (location: string) => {
    try {
      const parts = location.split(',');
      if (parts.length !== 2 || !parts[0] || !parts[1]) {
        console.error('Formato de coordenadas inválido:', location);
        return;
      }

      const lat = parseFloat(parts[0].trim());
      const lng = parseFloat(parts[1].trim());
      
      if (isNaN(lat) || isNaN(lng)) {
        console.error('Coordenadas inválidas:', location);
        return;
      }

      const coordinates = { lat, lng };
      
      setFormData(prev => ({ 
        ...prev, 
        location: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        coordinates 
      }));
      setCurrentStep(4);
    } catch (error) {
      console.error('Erro ao processar coordenadas:', error);
    }
  };
  
  const handleFinish = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowForm(false);
  };

  const handleStepClick = (step: number) => {
    // Não permite avançar para steps futuros sem completar os anteriores
    if (step === 2 && formData.deficiencies.length === 0) return;
    if (step === 3 && (formData.deficiencies.length === 0 || !formData.ageGroup)) return;
    if (step === 4 && (formData.deficiencies.length === 0 || !formData.ageGroup || !formData.coordinates)) return;
    
    // Permite voltar para steps anteriores
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  return (
    <div id="cer-form" className="w-full py-8">
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <StepIndicator
          currentStep={currentStep}
          totalSteps={4}
          onStepClick={handleStepClick}
        />
      </div>

      {currentStep === 1 && (
        <StepOne setShowForm={setShowForm} onNext={handleStepOneNext} />
      )}

      {currentStep === 2 && (
        <StepTwo
          selectedDeficiencies={formData.deficiencies}
          onBack={() => setCurrentStep(1)}
          onNext={handleStepTwoNext}
        />
      )}

      {currentStep === 3 && (
        <StepThree
          selectedDeficiencies={formData.deficiencies}
          ageGroup={formData.ageGroup}
          onBack={() => setCurrentStep(2)}
          onNext={handleStepThreeNext}
        />
      )}

      {currentStep === 4 && (
        <StepFour
          deficiencies={formData.deficiencies}
          ageGroup={formData.ageGroup}
          location={formData.location}
          userCoordinates={formData.coordinates}
          onBack={() => setCurrentStep(3)}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
}
