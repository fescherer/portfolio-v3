import { TProjectComponent } from "@/@types/project.type";
import { cn } from "@/util/cn.function";
import Image from "next/image";
import Link from "next/link";

type TProjectComponentPage = {
  project: TProjectComponent
}

export function ProjectComponent({project}: TProjectComponentPage) {
  const {title, text, link, image, orientation, color} = project

  return (
    <div className={cn("flex w-full flex-col-reverse items-center gap-12 justify-between px-5 py-10 md:p-10", orientation === 'right' ?  'md:flex-row-reverse' : 'md:flex-row')}>
      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="opacity-80">{text}</p>

        <Link className="link link-primary mt-4 flex items-center gap-2 text-sm" href={link}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
        </svg>
          Read more
        </Link>
      </div>

      <div className="relative h-40 w-64">
        <div className="h-40 w-64 rounded" style={{backgroundColor: color}}/>
        <Image className="absolute bottom-3 left-3 h-40 w-64 rounded" src={image.path} width={image.width} height={image.height} alt={image.alt} />
      </div>
    </div>
  )
}
