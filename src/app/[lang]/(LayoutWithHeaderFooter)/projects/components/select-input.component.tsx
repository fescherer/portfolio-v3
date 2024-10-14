'use client'

import { TProjectType } from "@/@types/project.type"
import { AVAILABLE_TYPE_PROJECTS } from "@/util/projects"
import Link from "next/link"
import { useRouter } from "next/navigation"

type SelectInputProps = {
  projectType: TProjectType | null
  placeholder: string
}


export function SelectInput({ projectType, placeholder }: SelectInputProps) {
  const router = useRouter()

  function navigateTo(path: string) {
    if (path === 'all') router.push(`/projects`)
    else router.push(`/projects/${path}`)
  }

  return (
    <div className="flex items-center gap-2">
      <select className="select select-bordered w-full max-w-xs opacity-80" defaultValue={projectType || 'first'} onChange={value => navigateTo(value.target.value)}>
        <option value="first" disabled>Project&apos;s type</option>
        {
          AVAILABLE_TYPE_PROJECTS.map(projectType => (
            <option key={projectType}>{projectType}</option>
          ))
        }
      </select>
      <Link href="/projects" className="btn btn-circle btn-ghost btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
        </svg>
      </Link>
    </div>
  )
}
