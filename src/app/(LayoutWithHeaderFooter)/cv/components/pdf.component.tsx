'use client'

import { cn } from "@/util/cn.function"
import { useState } from "react"

const langs = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'pt',
    name: 'Português'
  }
]

export function PDFComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState(langs[0].id)


  return (
    <>
      <div role="tablist" className="tabs-boxed tabs">
        {langs.map(language => (
          <button onClick={() => setSelectedLanguage(language.id)} key={language.id} type="button" className={cn('tab', language.id === selectedLanguage ? 'tab-active': '')}>{language.name}</button>
        ))}
      </div>

      <object data={`/resume/felipe-scherer-resume-${selectedLanguage}.pdf`} width="80%" height="1000" className="mx-auto my-4 w-full md:w-10/12">
        <embed src={`/resume/felipe-scherer-resume-${selectedLanguage}.pdf`} width="80%" height="1000px" className="w-full" />
      </object>
    </>
  )
}
