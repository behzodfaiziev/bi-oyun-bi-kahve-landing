"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL = 4000;

/**
 * Hero fotoğraf karuseli: üst üste duran fotoğraflar arasında yumuşak geçiş.
 * Fareyle üstüne gelince ya da klavyeyle odaklanınca durur; "hareketi azalt"
 * açıksa hiç kendiliğinden dönmez — noktalarla elle geçilir.
 */
export default function HeroCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, items.length]);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-paper-deep shadow-card sm:aspect-[16/11] lg:aspect-[4/5]"
      role="region"
      aria-roledescription="karusel"
      aria-label="Bi Oyun Bi Kahve'den fotoğraflar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {items.map((p, i) => (
        <Image
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={800}
          height={1200}
          priority={i === 0}
          aria-hidden={i !== index}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {items.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}. fotoğraf`}
            aria-current={i === index}
            // 24 px dokunma alanı, içinde küçük nokta.
            className="group flex h-6 items-center"
          >
            <span
              className={`block h-2 rounded-full bg-white shadow-sm transition-all ${
                i === index ? "w-6" : "w-2 opacity-60 group-hover:opacity-90"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
