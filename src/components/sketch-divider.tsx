export function SketchDivider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="h-4 w-full text-foreground/70"
        fill="none"
      >
        <path
          d="M2 14 C 60 6, 120 20, 180 12 S 300 4, 360 14 S 480 22, 540 12 S 660 4, 720 14 S 840 20, 900 11 S 1020 4, 1080 14 S 1160 20, 1198 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
