import { LogoIcon } from "@/icons/logo.icon";
import Link from "next/link";
import { MenuComponent } from "./components/menu.component";
import { MenuMobile } from "./components/menu-mobile.component";
import { LanguageSelector } from "./components/language-selector";

export function HeaderComponent() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <MenuMobile />
        </div>
        <Link href="/" className="hidden text-primary md:flex"><LogoIcon /></Link>
      </div>
      <div className="navbar-center md:hidden">
        <Link className=" text-primary" href="/"><LogoIcon /></Link>
      </div>
      <div className="navbar-end">
        <div className="hidden flex-1 items-center justify-end px-2 md:flex">
          <MenuComponent />
          <LanguageSelector />
        </div>
      </div>
    </div>

  )
}
