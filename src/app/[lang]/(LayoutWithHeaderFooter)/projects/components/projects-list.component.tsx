'use client'

import { PropsWithLocale } from '@/@types/language.type'
import { IProject } from '@/@types/project.type'
import { useState } from 'react'
import { useSearchContext } from '../contexts/search.context'
import { getProjectsSortedByDate } from '@/util/functions/get-projects-sorted-by-date'
import { ProjectCard } from './project-card.component'

type ProjectListProps = {
  projects: IProject[]
  translation: {
    readMore: string
  }
}
const PAGES_NUMBER = 6

export function ProjectListComponent({ projects, lang, translation }: PropsWithLocale<ProjectListProps>) {
  const { search } = useSearchContext()
  const [currentPage, setCurrentPage] = useState(0)

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredProjects = search
    ? projects.filter(project => project.id.match(rg)).sort(getProjectsSortedByDate)
    : projects.sort(getProjectsSortedByDate)

  const pages = Array.from(Array(Math.ceil(filteredProjects.length / PAGES_NUMBER)).keys())

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3">
        {
          filteredProjects.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER).map(project => (
            <ProjectCard key={project.id} project={project} lang={lang} translation={translation} />
          ))
        }
      </div>

      { filteredProjects.length > PAGES_NUMBER && (
        <div className="mt-8 flex items-center justify-end gap-2">
          <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0} type="button" className="hover:enabled:text-on-layer-0-l1 rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>

          </button>

          {pages.map(page => <button onClick={() => setCurrentPage(page)} type="button" className={`hover:bg-brand-hover-primary flex size-8 items-center justify-center rounded-full transition-all ${currentPage === page ? 'bg-brand-primary text-brand-on-primary' : ''}`} key={page}>{page + 1}</button>)}

          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === pages.length - 1} type="button" className="hover:enabled:text-on-layer-0-l1 rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

    </div>
  )
}
