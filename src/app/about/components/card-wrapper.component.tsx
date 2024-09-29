import { cn } from "@/util/cn.function";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type TCardWrapper = {
  direction?: 'row' | 'collumn'
  className?: ClassValue
}

export function CardWrapper({ children, direction = 'row', className }: PropsWithChildren<TCardWrapper>) {
  return (
    <section className={cn("m-4 flex flex-col items-center", direction === 'row' ? 'md:flex-row md:items-start justify-between': '', className)}>
      {children}
    </section>
  )
}
