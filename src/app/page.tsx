"use client"

import Typewriter from "@/components/typewriter/page";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen m-2 bg-primary border-2 border-secondary lg:flex-row">
      <header className="text-secondary border-2 m-1 border-secondary flex flex-col justify-center items-center flex-[1]">
        <Typewriter startingText="A:/>" text="bout"/> 
      </header>
      <div className="border-2 my-1 border-secondary flex-[4]"></div>
      <footer className="flex-[2] border-2 m-1 border-secondary"></footer>
    </main>
  );
}
