import { GithubIcon } from "@/icons/social/github.icon";
import { LinkedinIcon } from "@/icons/social/linkedin.icon";
import { YoutubeIcon } from "@/icons/social/youtube.icon";
import Link from "next/link";

export function SocialsComponent() {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-white md:justify-start">
      <Link href="https://youtube.com" target="_blank" className="rounded-full bg-[#FF0302] p-2 transition-all hover:brightness-75">
        <YoutubeIcon className="size-4" />
      </Link>
      <Link href="https://youtube.com" target="_blank" className="rounded-full bg-[#0A66C2] p-2 transition-all hover:brightness-75">
        <LinkedinIcon className="size-4" />
      </Link>
      <Link href="https://youtube.com" target="_blank" className="rounded-full bg-[#24292F] p-2 transition-all hover:brightness-75">
        <GithubIcon className="size-4" />
      </Link>
    </div>
  )
}
