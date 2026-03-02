"use client"

import { useState } from "react"
import { Camera, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/lib/i18n-context"

interface Measurements {
  chest: string
  waist: string
  hips: string
  height: string
}

export function MeasurementsSection() {
  const { t, locale } = useLocale()
  const [measurements, setMeasurements] = useState<Measurements>({
    chest: "90",
    waist: "70",
    hips: "96",
    height: "165",
  })

  const fields = [
    { key: "chest" as const, label: t("profile.chest") },
    { key: "waist" as const, label: t("profile.waist") },
    { key: "hips" as const, label: t("profile.hips") },
    { key: "height" as const, label: t("profile.height") },
  ]

  return (
    <div className="flex flex-col gap-4">
      {/* Body Silhouette */}
      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/50 p-6">
        <div className="relative">
          <svg viewBox="0 0 100 200" className="h-48 w-24">
            {/* Simple body silhouette */}
            <ellipse cx="50" cy="20" rx="14" ry="16" fill="oklch(0.55 0.16 10 / 0.15)" stroke="oklch(0.55 0.16 10 / 0.4)" strokeWidth="1" />
            <path d="M36 36 C30 50 28 70 30 90 L28 130 L38 130 L42 100 L50 105 L58 100 L62 130 L72 130 L70 90 C72 70 70 50 64 36 Z" fill="oklch(0.55 0.16 10 / 0.1)" stroke="oklch(0.55 0.16 10 / 0.3)" strokeWidth="1" />
            <path d="M38 130 L35 175 L30 195 L45 195 L42 165 L50 140 L58 165 L55 195 L70 195 L65 175 L62 130" fill="oklch(0.55 0.16 10 / 0.1)" stroke="oklch(0.55 0.16 10 / 0.3)" strokeWidth="1" />
            {/* Measurement Lines */}
            <line x1="18" y1="55" x2="82" y2="55" stroke="oklch(0.55 0.16 10)" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="88" y="58" fill="oklch(0.55 0.16 10)" fontSize="7" fontWeight="bold">{measurements.chest}</text>
            <line x1="20" y1="80" x2="80" y2="80" stroke="oklch(0.78 0.10 85)" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="84" y="83" fill="oklch(0.78 0.10 85)" fontSize="7" fontWeight="bold">{measurements.waist}</text>
            <line x1="18" y1="95" x2="82" y2="95" stroke="oklch(0.55 0.16 10)" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="86" y="98" fill="oklch(0.55 0.16 10)" fontSize="7" fontWeight="bold">{measurements.hips}</text>
          </svg>
        </div>
      </div>

      {/* Measurement Inputs */}
      <div className="grid grid-cols-2 gap-3">
        {fields.map((field) => (
          <div key={field.key} className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              {field.label} ({t("profile.cm")})
            </label>
            <div className="relative">
              <Input
                type="number"
                value={measurements[field.key]}
                onChange={(e) =>
                  setMeasurements((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="pe-8"
              />
              <Ruler className="absolute end-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>

      {/* Camera Scan */}
      <Button variant="outline" className="w-full">
        <Camera className="me-2 h-4 w-4" />
        {t("profile.scanCamera")}
      </Button>

      {/* Size Recommendation */}
      <div className="rounded-xl bg-primary/5 p-4">
        <p className="text-sm font-semibold text-foreground">
          {t("profile.sizeRecommendation")}
        </p>
        <div className="mt-2 flex gap-3">
          {[
            { store: "Zara", size: "M" },
            { store: "H&M", size: "38" },
            { store: "Ounass", size: "M/L" },
          ].map((rec) => (
            <div
              key={rec.store}
              className="flex flex-col items-center rounded-lg border border-border bg-card px-4 py-2"
            >
              <span className="text-xs text-muted-foreground">{rec.store}</span>
              <span className="text-lg font-bold text-primary">{rec.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
