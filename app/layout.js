import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Werk",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    title: "Werk",
    description: "Werk Community",
    images: {
      url: "https://download.werk.sg/assets/werkApp-321478e1.svg",
      width: 1920,
      height: 1080,
    },
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta property="og:image" content={metadata.image} />
      <meta property="og:description" content={metadata.description}/>
      </Head>
      <body className={`${inter.className} back-gradient`}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
      
    </html>
  );
}
