import Image from "next/image";

/**
 * Bölüm fotoğrafları. Telefonda yana kayan şerit (bir sonraki fotoğraf
 * kenardan görünür, kaydırılabildiği anlaşılır); lg'de tek satır ızgara.
 * Hepsi dikey (2:3) çekim — 4:5'e kırpılıyor.
 */
export default function PhotoStrip({
  items,
  priority = false,
}: {
  items: { src: string; alt: string }[];
  /** Sayfanın ilk ekranındaysa: tembel yükleme yerine hemen yükle. */
  priority?: boolean;
}) {
  return (
    <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] md:-mx-10 md:scroll-px-10 md:px-10 lg:mx-0 lg:grid lg:auto-cols-fr lg:grid-flow-col lg:gap-5 lg:overflow-visible lg:px-0">
      {items.map((p) => (
        <li key={p.src} className="w-[68%] shrink-0 snap-start sm:w-[40%] lg:w-auto">
          <Image
            src={p.src}
            alt={p.alt}
            width={640}
            height={960}
            priority={priority}
            className="aspect-[4/5] w-full rounded-card object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
