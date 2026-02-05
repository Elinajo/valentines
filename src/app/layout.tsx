import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mystery, wie weet wa dat is XOXO mijn Koalatje",
  description:
    "Play a game. Enkel op de link drukkken als je de uitdaging aan kan: Er wacht daarna een verassing op u !",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
