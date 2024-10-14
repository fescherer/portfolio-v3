import { Locale } from '@/i18n-config'

export type RootLayoutType = {
  params: {
    lang: Locale
  }
}

export type PropsWithLocale<P = unknown> = P & { lang: Locale }
