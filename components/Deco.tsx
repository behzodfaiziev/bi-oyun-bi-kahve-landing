import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Suluboya süsler (müşterinin Canva tasarımından, public/images/susler).
 * Yalnızca süs: ekran okuyucudan gizli, tıklamayı engellemez.
 *
 * İki kullanım:
 *  - `className` ile serbest konum (telefon/tablet yerleşimleri).
 *  - Canva ölçüleriyle (`l`/`r`/`ol`/`or` + `top` + `w`): masaüstü yerleşimi.
 *    Değerler Canva'daki tasarımdan ölçüldü; 1696 px ekranda (müşterinin
 *    ekranı) birebir. Konum ekran kenarına değil İÇERİK kutusuna (1120 px)
 *    göre — ekran genişleyince süsler içerikten kopmaz.
 */
const sizes = {
  agac: [313, 440],
  aycicegi: [330, 440],
  balon: [258, 440],
  bayrak: [900, 190],
  "bulut-1": [440, 283],
  "bulut-2": [440, 290],
  cali: [440, 238],
  cicek: [330, 440],
  cilek: [440, 407],
  cit: [440, 140],
  cupcake: [281, 440],
  gunes: [440, 432],
  lale: [266, 440],
  ordek: [440, 355],
  "pembe-balon": [139, 440],
  tavsan: [288, 440],
  timsah: [337, 440],
  ucak: [440, 356],
  "yildiz-balon": [237, 440],
  "yildizlar-1": [440, 257],
  "yildizlar-2": [440, 385],
  "yildizlar-3": [440, 410],
} as const;

/** Canva çerçevesinin genişliği ve içeriğin yarısı (px). */
const DESIGN_VW = 1696;
const HALF = 560;
const GUTTER = (DESIGN_VW - 2 * HALF) / 2; // 288

/**
 * İçeriğin DIŞINA taşan mesafe ekran daraldıkça kenar boşluğuyla orantılı
 * küçülür (1696 px'te birebir, 1120 px'te sıfır); içeriğin içine doğru olan
 * mesafe sabit kalır.
 */
function out(v: number) {
  if (v <= 0) return `${v}px`;
  return `clamp(0px, (100vw - ${2 * HALF}px) * ${(v / (2 * GUTTER)).toFixed(4)}, ${v}px)`;
}

type Placement = {
  /** Sol kenarı, içeriğin sol kenarından içeri (eksi: dışarı taşar). */
  l?: number;
  /** Sağ kenarı, içeriğin sağ kenarından içeri (eksi: dışarı taşar). */
  r?: number;
  /** Sol kenar boşluğunda: sağ kenarı içerikten bu kadar dışarıda. */
  ol?: number;
  /** Sağ kenar boşluğunda: sol kenarı içerikten bu kadar dışarıda. */
  or?: number;
  /** Bağlı olduğu öğenin üstünden (px). */
  top?: number;
  /** Ya da altından (px) — bölümün dibine basan süsler için. */
  bottom?: number;
  /** Canva'daki genişlik (px, 1696 px ekranda). */
  w?: number;
  /** Yatay ayna (Canva'da ters dönmüş olanlar). */
  flip?: boolean;
};

export default function Deco({
  name,
  className = "",
  priority = false,
  l,
  r,
  ol,
  or,
  top,
  bottom,
  w,
  flip,
}: {
  name: keyof typeof sizes;
  className?: string;
  priority?: boolean;
} & Placement) {
  const [width, height] = sizes[name];
  let style: CSSProperties | undefined;
  if (w !== undefined) {
    style = {
      top,
      bottom,
      width: `min(${w}px, ${((w / DESIGN_VW) * 100).toFixed(3)}vw)`,
      ...(flip ? { transform: "scaleX(-1)" } : null),
    };
    if (l !== undefined) style.left = `calc(50% - ${HALF}px - ${out(-l)})`;
    if (r !== undefined) style.right = `calc(50% - ${HALF}px - ${out(-r)})`;
    if (ol !== undefined) style.right = `calc(50% + ${HALF}px + ${out(ol)})`;
    if (or !== undefined) style.left = `calc(50% + ${HALF}px + ${out(or)})`;
  }
  return (
    <Image
      src={`/images/susler/${name}.webp`}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      priority={priority}
      draggable={false}
      style={style}
      className={`pointer-events-none absolute h-auto max-w-none select-none ${className}`}
    />
  );
}
