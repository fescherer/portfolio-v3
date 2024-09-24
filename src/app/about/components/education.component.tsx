import Link from "next/link";
import { CardWrapper } from "./card-wrapper.component";

export function EducationComponent() {
  return (
    <CardWrapper>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-4xl leading-loose tracking-wider">Education & Experiences</h2>
        <p className="max-w-md leading-snug">Lorem ipsum dolor sit amet consectetur. Faucibus praesent fusce dictum dignissim porttitor sit habitasse felis sit. Mi velit lacus feugiat egestas sit diam amet magna. Proin gravida ullamcorper et dolor morbi proin euismod. Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.</p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-outline btn-secondary" href="#resume">Resume</Link>
          <Link className="btn btn-outline btn-primary" href="#hire-me">Hire Me</Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start">
        <button type="button">Github link</button>
        <button type="button">Linkedin link</button>
        <div>qr code</div>

        <div className="divider" />

        <h3 className="text-2xl leading-loose tracking-wide">Languages</h3>
        <ol className="list-inside list-decimal">
          <li>Native Portuguese</li>
          <li>Advanced English</li>
        </ol>
      </div>
    </CardWrapper>
  )
}
