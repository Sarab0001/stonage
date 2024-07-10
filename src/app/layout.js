"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, Webgl } from "@/components";
import 'react-modern-drawer/dist/index.css'
import Head from "next/head";
import Script from "next/script";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const specialPages = ['/work','/work/chanel','/work/kobie-dee','/work/new-balance','/work/new-north-face',  '/servicepage', '/contactpage'];
  const isSpecialPage = specialPages.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-full relative'>
          <canvas className={`w-full  top-0 z-10 bg-fixed ${isSpecialPage ? 'h-0' : 'absolute  h-[100%] '}`}></canvas>
          <div className='w-full top-0'>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Script src="/script.js" strategy="lazyOnload" />
          <Script src="/dat.gui.min.js" strategy="lazyOnload" />
        </div>
      </body>
    </html>
  );
}
