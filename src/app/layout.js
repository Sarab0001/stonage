import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import 'react-modern-drawer/dist/index.css'
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StoneAge",
  description: "Enhancing creative concepts through AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
