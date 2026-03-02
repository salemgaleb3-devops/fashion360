"use client"

import { useState } from "react"
import { TrendingUp, ShoppingBag, Sparkles, Users, User, Bell } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import { LanguageToggle } from "@/components/language-toggle"
import { TrendsPage } from "@/components/trends/trends-page"
import { ShopPage } from "@/components/shop/shop-page"
import { StylePage } from "@/components/style/style-page"
import { SocialPage } from "@/components/social/social-page"
import { ProfilePage } from "@/components/profile/profile-page"
import { Button } from "@/components/ui/button"

type Tab = "trends" | "shop" | "style" | "social" | "profile"

export function AppShell() {
  const { t, dir } = useLocale()
  const [activeTab, setActiveTab] = useState<Tab>("trends")
  const [showNotification, setShowNotification] = useState(false)

  const tabs: { id: Tab; label: string; icon: typeof TrendingUp }[] = [
    { id: "trends", label: t("tab.trends"), icon: TrendingUp },
    { id: "shop", label: t("tab.shop"), icon: ShoppingBag },
    { id: "style", label: t("tab.style"), icon: Sparkles },
    { id: "social", label: t("tab.social"), icon: Users },
    { id: "profile", label: t("tab.profile"), icon: User },
  ]

  return (
    <div dir={dir} className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          <span className="text-primary">{t("app.name").split(" ")[0]}</span>{" "}
          <span className="text-amber-500 dark:text-amber-400">{t("app.name").split(" ").slice(1).join(" ")}</span>
        </h1>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9"
            onClick={() => setShowNotification(!showNotification)}
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute end-1 top-1 h-2 w-2 rounded-full bg-amber-500" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>

      {/* Notification Banner */}
      {showNotification && (
        <div className="flex items-center justify-between bg-blue-600 px-4 py-2 text-sm text-white dark:bg-blue-700">
          <span>{dir === "rtl" ? "صيحة جديدة: بدلات الكتان!" : "New trend alert: Linen Power Suits!"}</span>
          <button
            onClick={() => setShowNotification(false)}
            className="font-medium text-white underline-offset-2 hover:underline"
          >
            {dir === "rtl" ? "تجاهل" : "Dismiss"}
          </button>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {activeTab === "trends" && <TrendsPage />}
        {activeTab === "shop" && <ShopPage />}
        {activeTab === "style" && <StylePage />}
        {activeTab === "social" && <SocialPage />}
        {activeTab === "profile" && <ProfilePage />}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 start-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t border-border bg-background/95 backdrop-blur-sm rtl:translate-x-1/2">
        <div className="flex items-center justify-around py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : ""}`} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
