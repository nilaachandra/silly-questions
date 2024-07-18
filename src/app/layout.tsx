import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({subsets: ['latin'], weight: ['500', '800']})
export const metadata: Metadata = {
  title: "EZ Application",
  description: "Don't Write Your Applications, Let AI Do it",
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
      </body>
    </html>
  );
}
