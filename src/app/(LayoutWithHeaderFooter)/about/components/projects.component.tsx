import { TProjectComponent } from "@/@types/project.type";
import { CardWrapper } from "./card-wrapper.component";
import { ProjectComponent } from "./project.component";
import Link from "next/link";

const projects: TProjectComponent[] = [
  {
    title: 'Project1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, natus, fuga voluptatum sequi odit asperiores dignissimos rem, nam nulla odio adipisci expedita recusandae vitae saepe voluptas amet tempora. Ad, omnis!',
    image: {
      path: '/thumb.png',
      width: 640,
      height: 400,
      alt: 'Cat alura'
    },
    link: '/project1',
    orientation: 'left',
    color: '#ff2200'
  },
  {
    title: 'Project1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, natus, fuga voluptatum sequi odit asperiores dignissimos rem, nam nulla odio adipisci expedita recusandae vitae saepe voluptas amet tempora. Ad, omnis!',
    image: {
      path: '/thumb.png',
      width: 640,
      height: 400,
      alt: 'Cat alura'
    },
    link: '/project1',
    orientation: 'right',
    color: '#ff2200'
  },
  {
    title: 'Project1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, natus, fuga voluptatum sequi odit asperiores dignissimos rem, nam nulla odio adipisci expedita recusandae vitae saepe voluptas amet tempora. Ad, omnis!',
    image: {
      path: '/thumb.png',
      width: 640,
      height: 400,
      alt: 'Cat alura'
    },
    link: '/project1',
    orientation: 'left',
    color: '#ff2200'
  }
]

export function ProjectsComponent() {
  return (
    <CardWrapper direction="collumn" id="projects">
      <h2 className="text-center text-4xl leading-loose tracking-wider">Projects- Portfolio</h2>

      <div className="divide-y">
        {
          projects.map(project => (
            <ProjectComponent key={project.title} project={project}/>
          ))
        }
      </div>

      <Link href="/" className="btn btn-primary">View All</Link>
    </CardWrapper>
  )
}
