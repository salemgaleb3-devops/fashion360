"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { dictionary, type Locale } from "./i18n"

interface I18nContextType {
  locale: Locale
  dir: "ltr" | "rtl"
  t: (key: string) => string
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const dir = locale === "ar" ? "rtl" : "ltr"

  const t = useCallback(
    (key: string) => {
      return dictionary[key]?.[locale] ?? key
    },
    [locale]
  )

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  return (
    <I18nContext.Provider value={{ locale, dir, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useLocale must be used within I18nProvider")
  return context
}
