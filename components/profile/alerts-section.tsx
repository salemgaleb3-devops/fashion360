"use client"

import { useState } from "react"
import { Copy, Check, Clock, Star, Sparkles } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useLocale } from "@/lib/i18n-context"
import { deals } from "@/lib/mock-data"

export function AlertsSection() {
  const { t, locale } = useLocale()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [notifications, setNotifications] = useState({
    favBrands: true,
    seasonalSales: true,
    exclusiveCodes: false,
  })

  function copyCode(code: string) {
    navigator.clipboard.writeText(code).catch(() => {})
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const toggles = [
    { key: "favBrands" as const, label: t("profile.favBrands"), icon: Star },
    { key: "seasonalSales" as const, label: t("profile.seasonalSales"), icon: Clock },
    { key: "exclusiveCodes" as const, label: t("profile.exclusiveCodes"), icon: Sparkles },
  ]

  return (
    <div className="flex flex-col gap-5">
      {/* Notification Toggles */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex flex-col gap-4">
          {toggles.map((toggle) => (
            <div key={toggle.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <toggle.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  {toggle.label}
                </span>
              </div>
              <Switch
                checked={notifications[toggle.key]}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [toggle.key]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Promotions */}
      <div className="flex gap-3 overflow-x-auto scrollbar-none">
        <div className="shrink-0 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-50 p-4 dark:from-emerald-900/30 dark:to-teal-900/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            {locale === "ar" ? "عروض رمضان" : "Ramadan Offers"}
          </p>
          <p className="mt-1 text-2xl font-bold text-emerald-900 dark:text-emerald-200">
            {locale === "ar" ? "خصم ٣٥٪" : "35% OFF"}
          </p>
          <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
            {locale === "ar" ? "على جميع العبايات" : "On all Abayas"}
          </p>
        </div>
        <div className="shrink-0 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-50 p-4 dark:from-amber-900/30 dark:to-yellow-900/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            {locale === "ar" ? "تخفيضات العيد" : "Eid Sale"}
          </p>
          <p className="mt-1 text-2xl font-bold text-amber-900 dark:text-amber-200">
            {locale === "ar" ? "خصم ٥٠٪" : "50% OFF"}
          </p>
          <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
            {locale === "ar" ? "ماركات مختارة" : "Selected brands"}
          </p>
        </div>
      </div>

      {/* Active Deals */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-foreground">
          {t("profile.activeDeals")}
        </h3>
        <div className="flex flex-col gap-2">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`flex items-center gap-3 rounded-xl bg-gradient-to-r ${deal.gradient} p-3 dark:bg-gradient-to-r`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card/80 backdrop-blur-sm">
                <span className="text-xs font-bold text-foreground">{deal.discount}%</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{deal.brand}</p>
                <p className="text-xs text-muted-foreground">{deal.description[locale]}</p>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {t("profile.expiresIn")} {deal.expiryDays} {locale === "ar" ? "أيام" : "days"}
                </div>
              </div>
              <button
                onClick={() => copyCode(deal.code)}
                className="flex items-center gap-1 rounded-lg border border-border bg-card/80 px-2.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
              >
                {copiedCode === deal.code ? (
                  <Check className="h-3 w-3 text-primary" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {deal.code}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
