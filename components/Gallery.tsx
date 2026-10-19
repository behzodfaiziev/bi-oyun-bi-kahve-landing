"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; thumb: string; width: number; height: number; alt: string };

/** İlk açılışta gösterilen kare sayısı — 29 kare telefonda 10 ekran tutuyordu. */
const INITIAL = 12;

/**
 * Galerimiz: kare küçük görseller; tıklanınca sayfa kararır, fotoğraf ortada
 * büyür. Native <dialog>: odak hapsi, Esc ile kapanma ve arka planın
 * etkisizleşmesi tarayıcıdan gelir. Ok tuşları önceki/sonraki.
 */
export default function Gallery({ photos }: { photos: Photo[] }) {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = showAll ? photos : photos.slice(0, INITIAL);

  const step = (d: number) =>
    setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length));

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open !== null && !el.open) el.showModal();
    if (open === null && el.open) el.close();
  }, [open]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {visible.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-xl bg-paper-deep ring-1 ring-line sm:rounded-2xl"
              aria-label={`${p.alt} — büyüt`}
            >
              <Image
                src={p.thumb}
                alt=""
                width={480}
                height={480}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {photos.length > INITIAL ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-brand-muted bg-surface px-6 font-bold text-brand-deep transition-colors hover:bg-brand-tint"
          >
            {showAll ? "Daha az göster" : `Tüm fotoğraflar (${photos.length})`}
          </button>
        </div>
      ) : null}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        // Karartılmış zemine tıklamak kapatır; fotoğrafa tıklamak kapatmaz.
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        aria-label="Fotoğraf görüntüleyici"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink-deep/95 p-0 backdrop:bg-transparent"
      >
        {current ? (
          <div
            className="flex h-full flex-col items-center justify-center gap-3 px-4 py-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            {/* Kontroller fotoğrafın hemen üstünde, onunla aynı genişlikte. */}
            <div className="flex w-full max-w-[min(100%,calc((100dvh-8rem)*2/3))] items-center gap-2">
              <span className="flex-1 text-sm font-semibold text-white/80 tabular-nums">
                {open! + 1} / {photos.length}
              </span>
              <LightboxButton label="Önceki fotoğraf" onClick={() => step(-1)}>
                <path d="M15 5l-7 7 7 7" />
              </LightboxButton>
              <LightboxButton label="Sonraki fotoğraf" onClick={() => step(1)}>
                <path d="M9 5l7 7-7 7" />
              </LightboxButton>
              <LightboxButton label="Kapat" onClick={() => setOpen(null)}>
                <path d="M6 6l12 12M18 6 6 18" />
              </LightboxButton>
            </div>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-[calc(100dvh-8rem)] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function LightboxButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
