import { RootLayoutType } from '@/@types/language.type'
import { getDictionary } from '@/get-dictionary'
import { getMetadata } from '@/util/functions/seo'
import { ProjectsComponent } from './components/projects.component'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '/projects',
    imagePath: '/thumb.png',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.projects.seo,
  })
}

export default function ProjectsPage({ params }: RootLayoutType) {
  return (
    <ProjectsComponent lang={params.lang} />
  )
}
