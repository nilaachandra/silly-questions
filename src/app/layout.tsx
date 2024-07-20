import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";

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
const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.className}>
      <PHProvider>
      <body className="max-w-[712px] bg-black text-white w-full mx-auto p-4 min-h-screen">
      <PostHogPageView /> 
        <Toaster position="top-center" duration={3000}/>
        <Navbar/>
          <main>
            {children}
          </main>    
        <Footer/>  
      </body>
      </PHProvider>
    </html>
  );
}
