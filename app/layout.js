import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
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
    title: "Join me on Werk",
    description: "An Employment App To Link Them All. First local freelance marketplace connecting employers, freelancers, part-timers and individuals.",
    images: {
      url: "https://insta-werk-app.s3.ap-northeast-1.amazonaws.com/Test1.png",
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images.url} />
        <meta property="og:image:width" content={metadata.openGraph.images.width} />
        <meta property="og:image:height" content={metadata.openGraph.images.height} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1Z09C1VK7S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z09C1VK7S');
          `,
          }}
        ></script>
      </Head>

      <body className={`${inter.className} back-gradient`}>
        <Navbar />
        <main className="container">{children}</main>
        <footer
          id="contact"
          className="border-t border-gray-400 h-24 pl-12 py-6 werk-lighterblue text-white"
        >
          Contact us: support@werk.sg
        </footer>
      </body>
    </html>
  );
}

