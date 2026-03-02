"use client"

import { useLocale } from "@/lib/i18n-context"

const seasons = [
  { id: "all", key: "trends.season.all" },
  { id: "spring", key: "trends.season.spring" },
  { id: "summer", key: "trends.season.summer" },
  { id: "fall", key: "trends.season.fall" },
  { id: "winter", key: "trends.season.winter" },
]

interface SeasonFilterProps {
  active: string
  onChange: (season: string) => void
}

export function SeasonFilter({ active, onChange }: SeasonFilterProps) {
  const { t } = useLocale()

  return (
    <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-none">
      {seasons.map((season) => (
        <button
          key={season.id}
          onClick={() => onChange(season.id)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === season.id
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {t(season.key)}
        </button>
      ))}
    </div>
  )
}
