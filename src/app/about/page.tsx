import Image from "next/image";
import Link from "next/link";
import { AboutComponent } from "./components/about.component";
import { EducationComponent } from "./components/education.component";
import { ToolkitComponent } from "./components/toolkit.component";

export default function AboutPage() {
  return (
    <>
      <AboutComponent />
      <EducationComponent />
      <ToolkitComponent />
    </>
  )
}
