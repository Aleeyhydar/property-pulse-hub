import { processSteps } from "@/data/services";
import { cn } from "@/lib/utils";

export const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-border md:hidden" />
      <div className="hidden md:block absolute top-[23px] left-8 right-8 h-0.5 bg-border" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {processSteps.map((step, index) => (
          <div key={step.step} className="relative flex md:flex-col items-start md:items-center gap-4">
            {/* Step Number */}
            <div
              className={cn(
                "shrink-0 h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg z-10",
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border-2 border-primary text-primary"
              )}
            >
              {step.step}
            </div>

            {/* Content */}
            <div className="md:text-center">
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
