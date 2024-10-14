// import { Projects } from '@/features'
import { Locale } from '@/i18n-config'
// import { getMetadata } from '@/utils/functions/getMetada'
// import { AVAILABLE_TYPE_PROJECTS } from '@/utils/projects'
import { Metadata } from 'next'
import { ProjectsComponent } from '../components/projects.component'

type ProjectTypePageProps = {
  params: { projectType: string, lang: Locale }

}

// export async function generateMetadata(
//   { params }: ProjectTypePageProps,
// ): Promise<Metadata> {
//   const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => params.projectType === type)
//   if (isValidProjectType) {
//     return getMetadata({
//       defaultDescription: `${params.projectType} projects`,
//       defaultTitle: `Projects ${params.projectType}`,
//       canonicalURL: `/projects/${params.projectType}`,
//       imagePath: '/thumb.png',
//       defaultAltImage: 'Felipe Scherer',
//       defaultKeywords: [`project-${params.projectType}`],
//     })
//   } else return getMetadata({
//     defaultDescription: 'The project type was not found, please check the url',
//     defaultTitle: 'Projects',
//     canonicalURL: '',
//     imagePath: '/thumb.png',
//     defaultAltImage: 'Felipe Scherer',
//     defaultKeywords: ['projects'],
//   })
// }

export default function ProjectTypePage({ params: { projectType, lang } }: ProjectTypePageProps) {
  return (
    <ProjectsComponent projectType={projectType} lang={lang} />
  )
}
