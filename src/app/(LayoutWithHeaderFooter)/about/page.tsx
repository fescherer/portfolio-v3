import { AboutComponent } from "./components/about.component";
import { EducationComponent } from "./components/education.component";
import { ToolkitComponent } from "./components/toolkit.component";
import { ServicesComponent } from "./components/services.component";
import { ProjectsComponent } from "./components/projects.component";
import { BlogComponent } from "./components/blog.component";

export default function AboutPage() {
  return (
    <>
      <AboutComponent />
      <ProjectsComponent />
      <EducationComponent />
      <ToolkitComponent />
      <ServicesComponent />
      <BlogComponent />
    </>
  )
}
