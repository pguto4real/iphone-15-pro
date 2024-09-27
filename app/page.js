import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
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
    </main>
    // </Suspense>
  );
}
