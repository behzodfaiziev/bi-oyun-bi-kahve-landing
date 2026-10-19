import type { ServiceKey } from "@/lib/site";

/**
 * Hizmet ikonları — mobil uygulamadaki Ionicons'un aynısı (serviceColors.*.icon,
 * MIT lisanslı SVG'ler satır içi). Müşteri web ile uygulamada aynı ikonları
 * istedi. Emoji kullanılmıyor: her platformda farklı çizilir, renk alamaz.
 */
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 32,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const paths: Record<ServiceKey, React.ReactNode> = {
  // happy-outline
  play: (
    <>
      <circle cx="184" cy="232" r="24" fill="currentColor" />
      <path
        fill="currentColor"
        d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"
      />
      <circle cx="328" cy="232" r="24" fill="currentColor" />
      <circle cx="256" cy="256" r="208" {...s} />
    </>
  ),
  // cafe-outline
  cafe: (
    <path
      {...s}
      d="M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80h0zM64 416h336"
    />
  ),
  // color-palette-outline
  workshop: (
    <>
      <path
        {...s}
        d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"
      />
      <circle cx="144" cy="208" r="32" fill="currentColor" />
      <circle cx="152" cy="311" r="32" fill="currentColor" />
      <circle cx="224" cy="144" r="32" fill="currentColor" />
      <circle cx="256" cy="367" r="48" fill="currentColor" />
      <circle cx="328" cy="144" r="32" fill="currentColor" />
    </>
  ),
  // gift-outline
  birthday: (
    <>
      <path {...s} d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" />
      <rect {...s} x="64" y="160" width="384" height="112" rx="32" ry="32" />
      <path {...s} d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" />
    </>
  ),
  // flower-outline
  womens: (
    <>
      <path
        {...s}
        d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77"
      />
      <path
        {...s}
        d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37"
      />
      <circle {...s} cx="256" cy="256" r="64" />
    </>
  ),
  // sparkles-outline
  events: (
    <path
      {...s}
      d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"
    />
  ),
};

export default function ServiceIcon({
  name,
  size = 24,
}: {
  name: ServiceKey;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 transition-transform group-open:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
