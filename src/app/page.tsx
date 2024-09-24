import { TypewritterComponent } from "@/components/Typewritter.component";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[url('/blob.png')] bg-cover">
      <section  className="m-auto flex flex-col items-center gap-8">
          
        
        <Image className="w-60 animate-[wiggle_5s_ease-in-out_infinite] md:w-[528px]" src="/logo.svg" width={528} height={100} alt="Logo Felipe Scherer Dev" />

        <div className="w-full">
          <h1 className="text-3xl md:text-9xl">PORTFOLIO</h1>
          <div className="flex justify-between text-base md:text-2xl">
            <TypewritterComponent />
            <span>2024</span>
          </div>
        </div>

        <div className="mt-20 flex gap-6 text-xl">
          <Link className="link link-primary" href="/about">About me</Link>
          <Link className="link link-primary" href="/">Comming soon</Link>
        </div>
      </section>
    </main>
  );
}
