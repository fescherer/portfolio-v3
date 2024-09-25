import { PropsWithChildren } from "react";

export function CardWrapper({children}: PropsWithChildren) {
  return (
    <section className="m-4 flex flex-col items-center justify-between md:flex-row md:items-start">
      {children}
    </section>
  )
}
