import "./globals.css";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Visit Cameroon | Practical Info & Investment",
  description: "Everything you need to know for your journey to the Republic of Cameroon, from travel logistics to strategic investment opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        {/* Material Symbols Outlined font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
