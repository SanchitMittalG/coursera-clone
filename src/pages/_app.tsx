import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
