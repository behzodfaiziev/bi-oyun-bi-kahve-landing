import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages'e tam statik çıktı: `npm run build` → out/
  output: "export",
  // Statik export'ta görsel optimizasyon sunucusu yok.
  images: { unoptimized: true },
  // Her rota kendi klasöründe index.html olur — Cloudflare Pages yönlendirmesi sorunsuz.
  trailingSlash: true,
};

export default nextConfig;
