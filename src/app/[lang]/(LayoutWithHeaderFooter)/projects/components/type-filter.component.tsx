import { PropsWithLocale } from "@/@types/language.type"
import { TProjectType } from "@/@types/project.type"
import { getDictionary } from "@/get-dictionary"
import { SelectInput } from "./select-input.component"
import { SearchInput } from "./search-input.component"

type TypeFilterProps = {
  projectType: TProjectType | null
}

export async function TypeFilter({ projectType, lang }: PropsWithLocale<TypeFilterProps>) {
  const dictionary = await getDictionary(lang)

  return (
    <nav className="flex w-full flex-col gap-2 p-4 sm:flex-row sm:justify-between">
      <SelectInput projectType={projectType} placeholder={dictionary.projects.placeholder.search} />
      <SearchInput placeholder={dictionary.projects.placeholder.type} />
    </nav>
  )
}
