"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { AppShell } from "@/components/app-shell"

export default function Page() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  )
}
