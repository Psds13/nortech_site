'use client';

interface ProgressStepsProps {
  currentStep: number;
  totalSteps?: number;
  labels?: string[];
}

export function ProgressSteps({ currentStep, totalSteps = 3, labels }: ProgressStepsProps) {
  return (
    <div className="flex items-center justify-between gap-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, idx) => {
        const stepNum = idx + 1;
        const isActive = stepNum <= currentStep;
        return (
          <div key={stepNum} className="flex-1 flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-cyan text-black shadow-[0_0_10px_rgba(0,219,255,0.4)]'
                    : 'bg-slate-800 text-slate-500 border border-slate-700'
                }`}
              >
                {stepNum}
              </div>
              {labels?.[idx] && (
                <span className={`text-[10px] whitespace-nowrap transition-colors ${isActive ? 'text-cyan' : 'text-slate-500'}`}>
                  {labels[idx]}
                </span>
              )}
            </div>
            {stepNum < totalSteps && (
              <div
                className={`flex-1 h-1 rounded-full transition-colors mb-4 ${
                  stepNum < currentStep ? 'bg-cyan' : 'bg-slate-800'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
