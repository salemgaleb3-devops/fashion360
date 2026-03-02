"use client"

import { useState } from "react"
import { Shirt, CircleDot, Footprints, Gem, Check } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import { outfitItems } from "@/lib/mock-data"

const slotIcons = { top: Shirt, bottom: CircleDot, shoes: Footprints, accessory: Gem }
const slotKeys = ["top", "bottom", "shoes", "accessory"] as const
type Slot = (typeof slotKeys)[number]

export function OutfitBuilder() {
  const { t, locale } = useLocale()
  const [selections, setSelections] = useState<Record<Slot, string | null>>({
    top: null,
    bottom: null,
    shoes: null,
    accessory: null,
  })
  const [activeSlot, setActiveSlot] = useState<Slot>("top")

  const items = outfitItems[activeSlot]

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-bold text-foreground">{t("style.outfitBuilder")}</h3>

      {/* Outfit Preview */}
      <div className="grid grid-cols-4 gap-2">
        {slotKeys.map((slot) => {
          const Icon = slotIcons[slot]
          const selected = selections[slot]
          const item = selected
            ? outfitItems[slot].find((i) => i.id === selected)
            : null

          return (
            <button
              key={slot}
              onClick={() => setActiveSlot(slot)}
              className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-colors ${
                activeSlot === slot
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                  item
                    ? `bg-gradient-to-br ${item.gradient}`
                    : "bg-muted"
                }`}
              >
                <Icon className="h-5 w-5 text-foreground/30" />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground">
                {t(`style.${slot}`)}
              </span>
            </button>
          )
        })}
      </div>

      {/* Item Picker */}
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const isSelected = selections[activeSlot] === item.id
          return (
            <button
              key={item.id}
              onClick={() =>
                setSelections((prev) => ({
                  ...prev,
                  [activeSlot]: isSelected ? null : item.id,
                }))
              }
              className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient}`}
              >
                {slotIcons[activeSlot] && (
                  <Icon className="h-5 w-5 text-foreground/20" />
                )}
              </div>
              <span className="flex-1 text-start text-sm font-medium text-card-foreground">
                {item.name[locale]}
              </span>
              {isSelected && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Icon({ className }: { className?: string }) {
  return <Shirt className={className} />
}
