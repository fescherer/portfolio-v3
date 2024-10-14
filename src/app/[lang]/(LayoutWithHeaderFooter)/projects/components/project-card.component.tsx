import { PropsWithLocale } from '@/@types/language.type'
import { IProject } from '@/@types/project.type'
import Link from 'next/link'
import { LinkBtn } from './link-btn.component'
import { cn } from '@/util/cn.function'
import { RibbonComponent } from '@/components/ribbon.component'


type ProjectCardProps = {
  project: IProject
  translation: {
    readMore: string
  }
}
export function ProjectCard({ project, lang, translation }: PropsWithLocale<ProjectCardProps>) {
  const iconClassName = 'absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-on-primary'
  const linkPath = `/projects/${project.type.id}/${project.id}`
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <div title={project.title.pt} className="bg-layer-1 text-on-layer-1-l2 relative flex h-80 w-60 flex-col rounded transition-all hover:scale-105">

      <Link href={linkPath} className="absolute left-0 top-0 size-full" />

      <div className="relative min-h-[40%] overflow-hidden">
        <Link href={linkPath} className="absolute size-full scale-110 bg-cover bg-center blur-sm" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
        <Link href={linkPath} className="absolute top-0 size-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
      </div>

      <RibbonComponent
        href={`/projects/${project.type.id}`}
        bgColor={project.type.color.bg}
        textColor={project.type.color.text}
        title={project.type.title[lang] || ''}
      />

      <div className="relative">
        <div className="bg-brand-primary h-1 w-full" />

        <div className="absolute top-0 flex -translate-y-1/2 items-center gap-1">
          {
            project.site && (
              <LinkBtn title="Site" href={project.site} size={40}>
                <svg className={cn(iconClassName, 'size-4')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clipRule="evenodd" />
                </svg>

              </LinkBtn>
            )
          }

          {
            project.github && (
              <LinkBtn title="Code source" href={project.github} size={30}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={cn(iconClassName, 'size-4')} >
                  <path fillRule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clipRule="evenodd" />
                </svg>

              </LinkBtn>
            )
          }

          {
            project.figma && (
              <LinkBtn title="Layout source" href={project.figma} size={30}>
                <svg className={cn(iconClassName, 'size-4')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M15 11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6ZM7.25 7.5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h3.75a.5.5 0 0 0 .5-.5v-.5Zm1.5 3a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H9.25a.5.5 0 0 1-.5-.5v-.5ZM13.5 8v-.5A.5.5 0 0 0 13 7H9.25a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5Zm-6.75 3.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h3.75Z" clipRule="evenodd" />
                </svg>

              </LinkBtn>
            )
          }
        </div>

      </div>

      <div className="h-full px-4 pb-2 pt-4">
        <h2 title={project.title[lang]} className="font-title text-on-layer-1-l1 truncate text-lg">{project.title[lang]}</h2>
        <p className="vertical-ellipsis text-on-layer-1-l2 mt-2 text-sm">{project.description[lang]}</p>
      </div>

      <span className="self-end px-4  py-2 text-sm">{translation.readMore}</span>
    </div>
  )
}
