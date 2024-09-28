import { AboutComponent } from "./components/about.component";
import { EducationComponent } from "./components/education.component";
import { ToolkitComponent } from "./components/toolkit.component";
import { ServicesComponent } from "./components/services.component";

export default function AboutPage() {
  return (
    <>
      <AboutComponent />
      <EducationComponent />
      <ToolkitComponent />
      <ServicesComponent />
    </>
  )
}
