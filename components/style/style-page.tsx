"use client"

import { useState } from "react"
import { useLocale } from "@/lib/i18n-context"
import { experts } from "@/lib/mock-data"
import { OutfitBuilder } from "./outfit-builder"
import { ConsultationCard } from "./consultation-card"
import { AiStyleCard } from "./ai-style-card"

export function StylePage() {
  const { t } = useLocale()
  const [activeTab, setActiveTab] = useState<"style" | "consultations">("style")

  const tabs = [
    { id: "style" as const, label: t("style.myStyle") },
    { id: "consultations" as const, label: t("style.consultations") },
  ]

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {t("style.title")}
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4">
        {activeTab === "style" ? (
          <div className="flex flex-col gap-6">
            <OutfitBuilder />

            {/* Body Shape Selector */}
            <BodyShapeSelector />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Expert Cards */}
            {experts.map((expert) => (
              <ConsultationCard key={expert.id} expert={expert} />
            ))}

            {/* AI Card */}
            <AiStyleCard />
          </div>
        )}
      </div>
    </div>
  )
}

function BodyShapeSelector() {
  const { t } = useLocale()
  const [selected, setSelected] = useState<string | null>(null)

  const shapes = [
    { id: "hourglass", key: "style.bodyShape.hourglass", paths: "M12 3 C9 3 8 7 9 12 C8 17 9 21 12 21 C15 21 16 17 15 12 C16 7 15 3 12 3Z" },
    { id: "pear", key: "style.bodyShape.pear", paths: "M12 3 C10 3 9.5 6 10 10 C8 14 7 21 12 21 C17 21 16 14 14 10 C14.5 6 14 3 12 3Z" },
    { id: "apple", key: "style.bodyShape.apple", paths: "M12 3 C9 3 7 7 8 12 C7 15 9 21 12 21 C15 21 17 15 16 12 C17 7 15 3 12 3Z" },
    { id: "rectangle", key: "style.bodyShape.rectangle", paths: "M9 3 L9 21 L15 21 L15 3Z" },
    { id: "invTriangle", key: "style.bodyShape.invTriangle", paths: "M12 3 C7 3 6 7 8 12 C9 16 10 21 12 21 C14 21 15 16 16 12 C18 7 17 3 12 3Z" },
  ]

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-bold text-foreground">{t("style.bodyShape")}</h3>
      <div className="grid grid-cols-5 gap-2">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => setSelected(shape.id)}
            className={`flex flex-col items-center gap-1 rounded-xl border-2 p-2 transition-colors ${
              selected === shape.id
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-12 w-8">
              <path
                d={shape.paths}
                fill={selected === shape.id ? "oklch(0.55 0.16 10 / 0.2)" : "oklch(0.5 0 0 / 0.1)"}
                stroke={selected === shape.id ? "oklch(0.55 0.16 10)" : "oklch(0.5 0 0 / 0.3)"}
                strokeWidth="0.5"
              />
            </svg>
            <span className="text-[9px] font-medium text-muted-foreground">
              {t(shape.key)}
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="rounded-lg bg-primary/5 p-3">
          <p className="text-xs text-muted-foreground">
            {t("style.recommendations")}:{" "}
            {selected === "hourglass"
              ? "Wrap dresses, belted styles, fitted silhouettes"
              : selected === "pear"
                ? "A-line skirts, boat necks, structured shoulders"
                : selected === "apple"
                  ? "Empire waists, V-necks, flowing fabrics"
                  : selected === "rectangle"
                    ? "Peplum tops, ruffles, defined waistlines"
                    : "Wide-leg pants, full skirts, hip details"}
          </p>
        </div>
      )}
    </div>
  )
}
