import { LocaleText } from '@/i18n-config'

export type TProjectComponent = {
  title: string
  text: string
  link: string
  image: {
    path: string,
    width: number,
    height: number,
    alt: string
  }
  color: string,
  orientation: 'left' | 'right'
}

export type TTag = 'react' | 'figma' | 'next' | 'css' | 'html' | 'javascript' | 'angular' | 'python' | 'algorithm' | 'java' | 'linux' | 'uml' | 'backend' | 'fast-api' | 'nextjs' | 'p5' | 'game' | 'react-native' | 'java-spring' | 'firebase' | 'ux' | 'ui' | 'regex' | 'vite'

export type TProjectType = 'original' | 'coding-lesson' | 'coding-week' | 'college-lesson' | 'drawing' | 'snippets'

export interface IType {
  id: TProjectType
  title: LocaleText
  color: {
    bg: string
    text: string
  }
}

export interface IProject {
  id: string
  type: IType
  tags: TTag[]
  title: LocaleText
  description: LocaleText
  date: string
  github: string
  figma: string
  site: string
  images: string[]
  text: LocaleText
}
