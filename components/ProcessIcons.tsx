type IconProps = { className?: string };

export function FarmIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M10 34c0-6 4-11 9-13 1-5 5-9 10-9s9 4 10 9c5 2 9 7 9 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M16 34V40M24 18v22M32 34v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="26" r="2" fill="#EC7914" />
      <circle cx="30" cy="24" r="2" fill="#EC7914" />
      <path d="M8 40h32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HarvestIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 10c6 0 11 5 11 11 0 4-2 7-5 9H18c-3-2-5-5-5-9 0-6 5-11 11-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M24 10v22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="20" r="2" fill="#EC7914" />
      <circle cx="29" cy="19" r="2" fill="#EC7914" />
      <path d="M14 38c0-5 4-9 10-9s10 4 10 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SortIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 20h28M10 28h28M20 10v28M28 10v28" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      <circle cx="15" cy="15" r="2.5" fill="#EC7914" />
      <circle cx="33" cy="33" r="2.5" fill="#EC7914" opacity="0.7" />
    </svg>
  );
}

export function PackIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M12 20 24 14l12 6v16l-12 6-12-6V20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 20 24 26l12-6M24 26v16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="18" y="28" width="5" height="5" fill="#EC7914" />
      <rect x="26" y="28" width="5" height="5" fill="#EC7914" opacity="0.65" />
    </svg>
  );
}

export function QualityIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M28 28 36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17 21l3 3 7-8"
        stroke="#EC7914"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ColdIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8v32M24 8l-5 5M24 8l5 5M24 40l-5-5M24 40l5-5M8 24h32M8 24l5-5M8 24l5 5M40 24l-5-5M40 24l-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="#EC7914" opacity="0.85" />
    </svg>
  );
}

export function ExportIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 30h20c3 0 5 2 7 4H12c-2-2-2-4-4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 30V22h10l4 8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path
        d="M32 16v12M32 16h10M42 16v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="36" y="24" width="5" height="4" fill="#EC7914" />
    </svg>
  );
}

export const PROCESS_STEP_ICONS = [
  FarmIcon,
  HarvestIcon,
  SortIcon,
  PackIcon,
  QualityIcon,
  ColdIcon,
  ExportIcon,
] as const;
