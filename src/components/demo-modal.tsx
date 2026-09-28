import { ArrowRight, CirclePlay, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-brand-ink/70 p-5 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label="iMOX demo"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-background p-3 shadow-2xl">
        <Button
          aria-label="Close demo"
          variant="secondary"
          size="icon"
          className="absolute right-5 top-5 z-10"
          onClick={onClose}
        >
          <X />
        </Button>
        <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-brand-ink px-8 text-center text-primary-foreground">
          <span className="mb-5 grid size-16 place-items-center rounded-2xl bg-primary shadow-brand">
            <CirclePlay className="size-8" />
          </span>
          <h3 className="text-2xl font-bold">Chat becomes action</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/70">
            Say what needs to happen. iMOX detects the task, assigns an owner, tracks the deadline,
            and follows up automatically.
          </p>
          <Button asChild variant="inverted" className="mt-6">
            <a href="#download" onClick={onClose}>
              Start free <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
