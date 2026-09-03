import "../styles.css";

export const metadata = {
  title: "HRIPOP Media — Imagination, Hybridized Into Reality",
  description:
    "HRIPOP Media creates extraordinary experiences across creative industries, events, media, talent and image management.",
};

export const viewport = {
  themeColor: "#02070c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/hripop-hero.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
