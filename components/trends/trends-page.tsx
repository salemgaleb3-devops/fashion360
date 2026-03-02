"use client"

import { useState } from "react"
import { useLocale } from "@/lib/i18n-context"
import { trends } from "@/lib/mock-data"
import { SeasonFilter } from "./season-filter"
import { TrendCard } from "./trend-card"

export function TrendsPage() {
  const { t } = useLocale()
  const [activeSeason, setActiveSeason] = useState("all")

  const filtered =
    activeSeason === "all"
      ? trends
      : trends.filter((tr) => tr.season === activeSeason || tr.season === "all")

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Hero */}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-blue-500/10 to-amber-400/15 p-6">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            {t("app.name")}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            {t("trends.hero.title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("trends.hero.subtitle")}
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute -end-6 -top-6 h-28 w-28 rounded-full bg-blue-500/10 dark:bg-blue-400/10" />
        <div className="absolute -bottom-4 -start-4 h-20 w-20 rounded-full bg-amber-400/15 dark:bg-amber-300/10" />
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-bold text-foreground">{t("trends.title")}</h3>
        <button className="text-xs font-medium text-primary hover:underline">
          {t("common.seeAll")}
        </button>
      </div>

      {/* Season Filter */}
      <SeasonFilter active={activeSeason} onChange={setActiveSeason} />

      {/* Trend Cards Grid */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {filtered.map((trend) => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  )
}
