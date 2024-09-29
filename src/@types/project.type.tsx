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
