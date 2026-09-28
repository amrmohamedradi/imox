export function AppIcon({ className = "size-14" }: { className?: string }) {
  return (
    <img
      src="/icon-mark.svg"
      alt="iMOX app icon"
      width={1090}
      height={1090}
      className={`drop-shadow-[0_16px_38px_rgba(0,0,0,0.35)] ${className}`}
    />
  );
}
