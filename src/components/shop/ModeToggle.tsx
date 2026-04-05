import { useAnimation } from "@/contexts/AnimationContext";

const ModeToggle = () => {
  const { mode, setMode } = useAnimation();
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 shadow-lg">
      <button
        onClick={() => setMode("standard")}
        className={`rounded-md px-3 py-1 text-sm font-satoshi font-medium ${
          mode === "standard" ? "bg-background text-foreground" : "text-primary-foreground"
        }`}
        aria-pressed={mode === "standard"}
      >
        Standard
      </button>
      <button
        onClick={() => setMode("premium")}
        className={`rounded-md px-3 py-1 text-sm font-satoshi font-medium ${
          mode === "premium" ? "bg-background text-foreground" : "text-primary-foreground"
        }`}
        aria-pressed={mode === "premium"}
      >
        Premium
      </button>
    </div>
  );
};

export default ModeToggle;
