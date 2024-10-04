'use client'

import { cn } from "@/util/cn.function";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./menu-items";

export function MenuComponent() {
  const pathname = usePathname()

  return (
    <>
      {
        menuItems.map(menu => (
          menu.subItems.length > 0 ?
            <div key={menu.id} className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className={cn("btn btn-ghost flex items-center gap-1", pathname === menu.mainItem.path ? 'text-primary' : '')}>
                {menu.mainItem.name}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow">
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
            </div> :
            <Link key={menu.mainItem.id} href={menu.mainItem.path} className={cn("btn btn-ghost", pathname === menu.mainItem.path ? 'text-primary' : '')}>
              {menu.mainItem.name}
            </Link>
        ))
      }
    </>
  )
}
