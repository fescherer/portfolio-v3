import { TypewritterComponent } from "@/components/Typewritter.component";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <main className="bg-[url('/blob.png')] bg-cover flex flex-col min-h-screen w-full">
        <section  className="m-auto flex flex-col items-center gap-8">
          
        
        <Image className="w-60 md:w-[528px] animate-[wiggle_5s_ease-in-out_infinite]" src="/logo.svg" width={528} height={100} alt="Logo Felipe Scherer Dev"></Image>

        <div className="w-full">
          <h1 className="text-3xl md:text-9xl">PORTFOLIO</h1>
          <div className="text-base md:text-2xl flex justify-between">
            <TypewritterComponent></TypewritterComponent>
            <span>2024</span>
          </div>
        </div>

        <div className="mt-20 text-xl flex gap-6">
          <Link className="link link-primary" href="/about">About me</Link>
          <Link className="link link-primary" href="/">Comming soon</Link>
        </div>
        </section>
    </main>
  );
}
