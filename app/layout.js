import { Outfit, Ovo, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weigth: ["400","500","600","700"]
});


const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zaid-Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8`}
      >
        {children}
      </body>
    </html>
  );
}
