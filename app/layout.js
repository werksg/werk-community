import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Werk",
    description: "Werk Community",
    image: "https://download.werk.sg/assets/werkApp-321478e1.svg",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  og: {
    image: "https://download.werk.sg/assets/werkApp-321478e1.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta property="og:image" content="https://insta-werk-app.s3.ap-northeast-1.amazonaws.com/apple_store-button.png" />
      </Head>
      <body className={`${inter.className} back-gradient`}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
      
    </html>
  );
}
