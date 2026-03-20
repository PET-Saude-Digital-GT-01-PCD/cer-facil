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

  const handleStepThreeNext = (location: string, coordinates: { lat: number; lng: number }) => {
    setFormData(prev => ({ ...prev, location, coordinates }));
    setCurrentStep(4);
  };

  const handleFinish = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setShowForm(false);
  };

  const handleStepClick = (step: number) => {
    if (step === 2 && formData.deficiencies.length === 0) return;
    if (step === 3 && (formData.deficiencies.length === 0 || !formData.ageGroup)) return;
    if (step === 4 && (formData.deficiencies.length === 0 || !formData.ageGroup || !formData.coordinates)) return;

    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  return (
    <div id="cer-form" className="w-full py-8">
      <div aria-hidden="true" className="max-w-4xl mx-auto px-4 mb-8">
        <StepIndicator
          aria-hidden="true"
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