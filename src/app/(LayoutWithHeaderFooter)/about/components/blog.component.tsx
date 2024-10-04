import Image from "next/image";
import { CardWrapper } from "./card-wrapper.component";
import Link from "next/link";

export function BlogComponent() {
  return (
    <CardWrapper id="blog">
      <div className="max-w-sm">
        <h2 className="text-4xl leading-loose tracking-wider">
          Blog
        </h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem eum nesciunt quibusdam! Qui, architecto. Aut, labore tempore. Repellendus itaque quos nobis sint exercitationem aperiam reprehenderit quasi hic fugiat non!</p>
      </div>

      <Link href="https://fennectales.com" target="_blank">
        <Image className="rounded" src="/blog.png" width={1068} height={922} alt="Blog" />
      </Link>
    </CardWrapper>
  )
}
