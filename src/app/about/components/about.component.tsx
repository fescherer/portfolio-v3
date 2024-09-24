import Image from "next/image";
import Link from "next/link";
import { CardWrapper } from "./card-wrapper.component";

export function AboutComponent() {
  return (
    <CardWrapper>
      <div className="flex flex-col gap-2">
        <div className="mockup-window border bg-base-300">
          <Image width={1722} height={2330} className="flex w-72 justify-center bg-base-200 p-2" alt="Felipe Scherer photo" src="/felipe-scherer.webp" unoptimized />
        </div>
        <div className="flex flex-wrap gap-3">
          <Image src="/react.svg" width={40} height={40} alt="React logo" />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl leading-loose tracking-wider">About me</h1>
        <p className="max-w-md leading-snug">Lorem ipsum dolor sit amet consectetur. Faucibus praesent fusce dictum dignissim porttitor sit habitasse felis sit. Mi velit lacus feugiat egestas sit diam amet magna. Proin gravida ullamcorper et dolor morbi proin euismod. Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.Tincidunt gravida pellentesque id enim posuere volutpat arcu et.</p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-outline btn-secondary" href="#resume">Resume</Link>
          <Link className="btn btn-outline btn-primary" href="#hire-me">Hire Me</Link>
        </div>
      </div>
    </CardWrapper>
  )
}
