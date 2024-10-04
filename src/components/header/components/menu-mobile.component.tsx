'use client'

import { usePathname } from "next/navigation"
import { menuItems } from "./menu-items"
import { cn } from "@/util/cn.function"
import Link from "next/link"

export function MenuMobile() {
  const pathname = usePathname()

  return (
    <ul tabIndex={0}  className="menu dropdown-content menu-sm z-[1] w-56 rounded-box bg-base-200">
      {
        menuItems.map(menu => (
          menu.subItems.length > 0 ?
            <li key={menu.id}>
              <details>
                <summary className={cn("btn btn-ghost justify-between", pathname === menu.mainItem.path ? 'text-primary' : '')}>{menu.mainItem.name}</summary>
                <ul>
                  {
                    menu.subItems.map(subMenu => (
                      <li key={subMenu.id}>
                        <Link key={subMenu.id} href={subMenu.path} className={cn("btn btn-ghost justify-start whitespace-nowrap", pathname === subMenu.path ? 'text-primary' : '')}>
                          {subMenu.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </details>
            </li>
            :
            <Link key={menu.mainItem.id} href={menu.mainItem.path} className={cn("btn btn-ghost justify-start", pathname === menu.mainItem.path ? 'text-primary' : '')}>
              {menu.mainItem.name}
            </Link>
        ))}
    </ul>






  )
}
