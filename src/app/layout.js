import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Pixel&Code | Desarrollo Web y Software a Medida",
//   description: "Agencia digital especializada en diseño web creativo y desarrollo de software a medida.",
// };
export const metadata = {
  title: "Pixel&Code | Desarrollo Web y Software a Medida",
  description: "Agencia digital especializada en diseño web creativo y desarrollo de software a medida.",
  keywords: [
    "agencia web Puerto Madryn",
    "desarrollo web Argentina",
    "software a medida",
    "creación de apps móviles",
    "diseño web profesional",
    "creacion de paginas web",
    "empresa desarrollo software Patagonia",
    "desarrolladores web Chubut",
    "agencia digital Argentina",
    "agencia Puerto madryn"
  ],
  openGraph: {
    title: "Pixel&Code",
    description: "Diseño web y desarrollo de software a medida.",
    url: "https://pixelycode.com",
    siteName: "Pixel&Code",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel&Code - Diseño Web",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
