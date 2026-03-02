"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n-context"
import { MeasurementsSection } from "./measurements-section"
import { AnalyticsSection } from "./analytics-section"
import { AlertsSection } from "./alerts-section"

type ProfileTab = "measurements" | "analytics" | "alerts"

export function ProfilePage() {
  const { t, locale } = useLocale()
  const [activeTab, setActiveTab] = useState<ProfileTab>("measurements")

  const tabs: { id: ProfileTab; label: string }[] = [
    { id: "measurements", label: t("profile.measurements") },
    { id: "analytics", label: t("profile.analytics") },
    { id: "alerts", label: t("profile.alerts") },
  ]

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-3 bg-gradient-to-b from-primary/10 to-transparent px-4 pb-4 pt-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70">
          <span className="text-2xl font-bold text-primary-foreground">
            {locale === "ar" ? "ن" : "N"}
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-foreground">
            {locale === "ar" ? "نورة الأحمد" : "Noura Al-Ahmed"}
          </h2>
          <p className="text-xs text-muted-foreground">@noura_style</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-base font-bold text-foreground">42</p>
            <p className="text-[10px] text-muted-foreground">{t("profile.posts")}</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-foreground">1.2K</p>
            <p className="text-[10px] text-muted-foreground">{t("profile.followers")}</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-foreground">380</p>
            <p className="text-[10px] text-muted-foreground">{t("profile.following")}</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Settings className="me-1.5 h-3.5 w-3.5" />
          {t("profile.editProfile")}
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-4">
        {activeTab === "measurements" && <MeasurementsSection />}
        {activeTab === "analytics" && <AnalyticsSection />}
        {activeTab === "alerts" && <AlertsSection />}
      </div>
    </div>
  )
}
