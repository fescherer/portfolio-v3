import { PropsWithLocale } from "@/@types/language.type"
import { IProject, TProjectType } from "@/@types/project.type"
import { getDictionary } from "@/get-dictionary"
import { AVAILABLE_TYPE_PROJECTS, PROJECTS } from "@/util/projects"
import { SearchProvider } from "../contexts/search.context"
import { Suspense } from "react"
import { ProjectListComponent } from "./projects-list.component"
import { TypeFilter } from "./type-filter.component"

type ProjectsProps = {
  projectType?: string
}

function getAllProjects(availableProjects: TProjectType[]): IProject[] {
  let allProjects: IProject[] = []
  availableProjects.map(projectType => allProjects = [...allProjects, ...PROJECTS[projectType as keyof typeof PROJECTS]])
  return allProjects
}


export async function ProjectsComponent({ projectType = '', lang }: PropsWithLocale<ProjectsProps>) {
  const dictionary = await getDictionary(lang)

  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(AVAILABLE_TYPE_PROJECTS)
    : getAllProjects(AVAILABLE_TYPE_PROJECTS)

  return (
    <SearchProvider>
      <main className="m-auto flex w-full max-w-5xl flex-col items-center gap-8">

        <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} lang={lang} />

        <Suspense fallback={<p>...</p>}>
          <ProjectListComponent projects={projects} lang={lang} translation={{ readMore: dictionary.projects['project-card']['read-more'] }} />
        </Suspense>
      </main>
    </SearchProvider>
  )
}
