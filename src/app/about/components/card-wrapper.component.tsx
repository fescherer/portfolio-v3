import { cn } from "@/util/cn.function";
import { PropsWithChildren } from "react";

type TCardWrapper = {
  direction?: 'row' | 'collumn'
}

export function CardWrapper({ children, direction = 'row' }: PropsWithChildren<TCardWrapper>) {
  return (
    <section className={cn("m-4 flex flex-col items-center", direction === 'row' ? 'md:flex-row md:items-start justify-between': '')}>
      {children}
    </section>
  )
}
