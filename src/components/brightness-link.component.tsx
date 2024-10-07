import { cn } from "@/util/cn.function";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type LinkType = LinkProps & React.HTMLProps<HTMLAnchorElement>

export function BrightnessLink({ children, className, href, ...props }: PropsWithChildren<LinkType>) {
  return (
    <Link href={href} {...props} className={cn('hover:brightness-90 transition-all' ,className)}>
      {children}
    </Link>
  )
}
