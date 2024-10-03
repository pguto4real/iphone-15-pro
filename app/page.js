import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
    // </Suspense>
  );
}
