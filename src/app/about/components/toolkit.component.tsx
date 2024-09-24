import Image from "next/image";
import { CardWrapper } from "./card-wrapper.component";
import Link from "next/link";

const toolkit = [
  {
    name: 'react',
    icon: '/react.svg'
  },
  {
    name: 'html',
    icon: '/react.svg'
  },
  {
    name: 'htmal',
    icon: '/react.svg'
  },
  {
    name: 'htmdsl',
    icon: '/react.svg'
  },
  {
    name: 'htmdl',
    icon: '/react.svg'
  },
  {
    name: 'htfdml',
    icon: '/react.svg'
  },
  {
    name: 'htmfdl',
    icon: '/react.svg'
  },
  {
    name: 'htmld',
    icon: '/react.svg'
  },
  {
    name: 'hawtml',
    icon: '/react.svg'
  },
]

export function ToolkitComponent() {
  return (
    <section className="flex flex-col">
      <h2 className="text-center text-4xl leading-loose tracking-wider">
        Toolkit
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {
          toolkit.map(tool => (
            <label key={tool.name} className="swap swap-flip">
              <input type="checkbox" />

              <div className="swap-off relative flex items-center justify-center rounded bg-neutral p-2 text-neutral-content">
                <div className="flex flex-col items-center ">
                  <Image width={40} height={40} alt={tool.name} src={tool.icon} />
                  {tool.name}

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="absolute -right-1 -top-1 size-4 rounded-full border border-neutral">
                    <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="swap-on  relative flex max-w-32 flex-col items-center rounded bg-neutral p-2 text-neutral-content">
                <span className="text-xs">s sit diam amet magna. Proin gravida ullamcorper et dolor morbi proin euismod.</span>

                <Link href="/" className="btn btn-circle btn-xs mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                </Link>


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="absolute -right-1 -top-1 size-4 rounded-full border border-neutral">
                  <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
                </svg>

              </div>
            </label>
          ))
        }
      </div>

    </section>
  )
}
