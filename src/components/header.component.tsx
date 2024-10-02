'use client'

import { cn } from "@/util/cn.function";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function HeaderComponent() {
  const pathname = usePathname()

  return (
    <header className="flex w-full items-center justify-between p-4">
      <Image className="w-60" src="/logo.svg" width={528} height={100} alt="Logo Felipe Scherer Dev" />

      <div className="flex gap-4">
        <Link href="/" className={cn("link-hover link", pathname === '/' ? 'link-accent' : '')}>Home</Link>
        <Link href="/about" className={cn("link-hover link", pathname === '/about' ? 'link-accent' : '')}>About</Link>
      </div>
    </header>
  )
}
