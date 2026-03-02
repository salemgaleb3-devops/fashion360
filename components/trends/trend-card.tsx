"use client"

import { Shirt, Footprints, ShoppingBag, Sparkles, Gem } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import type { TrendItem } from "@/lib/mock-data"

const iconMap: Record<string, typeof Shirt> = {
  Shirt,
  Footprints,
  ShoppingBag,
  Sparkles,
  Gem,
}

interface TrendCardProps {
  trend: TrendItem
}

export function TrendCard({ trend }: TrendCardProps) {
  const { locale, t } = useLocale()
  const Icon = iconMap[trend.icon] ?? Sparkles

  const categoryKey = `trends.category.${trend.category}` as const
  const badgeKey = trend.badge === "new" ? "trends.new" : "trends.trending"

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      {/* Image area */}
      <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${trend.gradient}`}>
        <Icon className="h-12 w-12 text-foreground/20 transition-transform group-hover:scale-110" />
        {/* Badge */}
        <span
          className={`absolute start-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            trend.badge === "new"
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          }`}
        >
          {t(badgeKey)}
        </span>
      </div>
      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold leading-tight text-card-foreground">
          {trend.name[locale]}
        </h3>
        <span className="mt-1 inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
          {t(categoryKey)}
        </span>
      </div>
    </div>
  )
}
