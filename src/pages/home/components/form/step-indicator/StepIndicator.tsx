interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const stepLabels = ["Deficiência", "Idade", "Localização", "Resultados"];

export default function StepIndicator({
  currentStep,
  totalSteps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div aria-hidden="true" className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div aria-hidden="true" key={step} className="flex flex-col items-center flex-1">
            <div className="relative flex flex-col items-center w-full">
              <div className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => onStepClick(step)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    currentStep === step
                      ? "bg-[var(--cor-bg-1)] text-white scale-110"
                      : currentStep > step
                      ? "bg-[var(--cor-bg-1)] text-white"
                      : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                  }`}
                >
                  {step}
                </button>
                <span className={`mt-3 text-base font-medium text-center ${
                  currentStep === step ? "text-[var(--cor-bg-1)]" : currentStep > step ? "text-[var(--cor-bg-1)]" : "text-gray-500"
                }`}>
                  {stepLabels[step - 1]}
                </span>
              </div>
              {step > 1 && (
                <div
                  className={`absolute top-8 right-1/2 w-full h-3 -translate-y-1/2 ${
                    currentStep >= step ? "bg-[var(--cor-bg-1)]" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
