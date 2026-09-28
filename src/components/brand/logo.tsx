export function Logo({ light = false, className = "h-9" }: { light?: boolean; className?: string }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="iMOX home">
      <img
        src={light ? "/logo-light.svg" : "/logo.svg"}
        alt="iMOX"
        width={3237}
        height={1090}
        className={`w-auto ${className}`}
      />
    </a>
  );
}
