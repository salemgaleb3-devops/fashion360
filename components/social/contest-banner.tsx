"use client"

import { Trophy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n-context"

export function ContestBanner() {
  const { t, locale } = useLocale()

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-primary p-5 dark:from-blue-800 dark:via-blue-700 dark:to-primary">
      {/* Decorative */}
      <div className="absolute -end-6 -top-6 h-24 w-24 rounded-full bg-amber-400/15" />
      <div className="absolute -bottom-4 -start-4 h-16 w-16 rounded-full bg-amber-400/15" />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary-foreground" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
            {t("social.contest")}
          </span>
        </div>
        <h3 className="text-lg font-bold text-primary-foreground">
          {t("social.contestTitle")}
        </h3>
        <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-1">
            <Trophy className="h-3.5 w-3.5" />
            <span>
              {t("social.prize")}: 5,000 {locale === "ar" ? "ر.س" : "SAR"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>
              {t("social.endsIn")} 7 {t("social.days")}
            </span>
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="w-fit"
        >
          {t("social.enterNow")}
        </Button>
      </div>
    </div>
  )
}
