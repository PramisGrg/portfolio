import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const neueMontreal = localfont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/NeueMontreal-BoldItalic.otf",
      weight: "500",
      style: "boldItalic",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal-Light.otf",
      weight: "200",
      style: "light",
    },
  ],
  variable: "--font-neueMontreal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} antialiased`}>{children}</body>
    </html>
  );
}
