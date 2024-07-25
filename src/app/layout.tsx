import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({subsets: ['latin'], weight: ['500', '800']})
export const metadata: Metadata = {
  title: "Silly Question",
  description: "Ask Silly Questions that increases your Twitter Engagements!",
  icons: {
    icon: ["sillyquestions.png"],
    shortcut: ["sillyquestions.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.className}>
      <body className="max-w-[712px] bg-black text-white w-full mx-auto p-4 min-h-screen">
        <Toaster position="top-center" duration={3000}/>
        <Navbar/>
          <main>
            {children}
          </main>    
        <Footer/>  
      <Analytics/>
      </body>
    </html>
  );
}
