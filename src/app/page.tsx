"use client"

import Typewriter from "@/components/typewriter/page";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen m-2 bg-primary border-2 border-secondary lg:flex-row">
      <header className="text-secondary border-2 m-1 border-secondary flex gap-2 lg:flex-col lg:gap-6 justify-center items-center flex-[0.5] lg:flex-[3] text-2xl lg:text-4xl">
        <Image src="/bacteria.png"  alt="mario image" height={128} width={128}  />
        <Typewriter startingText="A:/>" text="ction"/>
        <Typewriter startingText="A:/>" text="dventure"/>
        <Typewriter startingText="S:/>" text="trategy"/>
        <Typewriter startingText="S:/>" text="imulation"/>
      </header>
      <div className="border-2 lg:my-1 mx-1 lg:mx-0 border-secondary flex-[8]"></div>
      <footer className="flex-[4] border-2 m-1 border-secondary"></footer>
    </main>
  );
}
