"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n-context"

export function LanguageToggle() {
  const { t, toggleLocale } = useLocale()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="flex h-9 items-center gap-1.5 px-2.5 text-xs font-medium text-foreground"
    >
      <Globe className="h-4 w-4" />
      <span>{t("common.language")}</span>
    </Button>
  )
}
