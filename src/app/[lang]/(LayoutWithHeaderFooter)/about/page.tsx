import { AboutComponent } from "./components/about.component";
import { EducationComponent } from "./components/education.component";
import { ToolkitComponent } from "./components/toolkit.component";
import { ServicesComponent } from "./components/services.component";
import { ProjectsComponent } from "./components/projects.component";
import { BlogComponent } from "./components/blog.component";
import { RootLayoutType } from "@/@types/language.type";
import { getDictionary } from "@/get-dictionary";

export default async function AboutPage({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)

  return (
    <>
      <AboutComponent dictionary={dictionary}/>
      <ProjectsComponent />
      <EducationComponent />
      <ToolkitComponent />
      <ServicesComponent />
      <BlogComponent />
    </>
  )
}
