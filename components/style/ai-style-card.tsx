"use client"

import { useState } from "react"
import { Camera, Wand2, Loader2, Palette, RulerIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLocale } from "@/lib/i18n-context"

const occasions = [
  { id: "casual", key: "style.occasion.casual" },
  { id: "formal", key: "style.occasion.formal" },
  { id: "wedding", key: "style.occasion.wedding" },
  { id: "party", key: "style.occasion.party" },
]

export function AiStyleCard() {
  const { t, locale } = useLocale()
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const [budget, setBudget] = useState([500])
  const [selectedOccasion, setSelectedOccasion] = useState("casual")

  function handleAnalyze() {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setAnalyzed(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* AI Analysis */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="flex items-center gap-2 text-base font-bold text-card-foreground">
          <Wand2 className="h-4 w-4 text-primary" />
          {t("style.aiAnalysis")}
        </h3>
        <div className="mt-3 flex flex-col items-center gap-3">
          <div className="flex h-32 w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Camera className="h-8 w-8" />
              <span className="text-xs font-medium">{t("style.uploadPhoto")}</span>
            </div>
          </div>
          <Button
            className="w-full"
            onClick={handleAnalyze}
            disabled={analyzing}
          >
            {analyzing ? (
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="me-2 h-4 w-4" />
            )}
            {t("style.analyzeStyle")}
          </Button>
        </div>

        {analyzed && (
          <div className="mt-4 flex flex-col gap-2 rounded-lg bg-primary/5 p-3">
            <p className="text-sm font-semibold text-foreground">
              {locale === "ar" ? "نتائج التحليل" : "Analysis Results"}
            </p>
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                {locale === "ar"
                  ? "أسلوبك: كلاسيكي أنيق مع لمسات عصرية"
                  : "Your style: Classic Elegant with Modern touches"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                {locale === "ar"
                  ? "الألوان المناسبة: بيج، أسود، وردي داكن"
                  : "Best colors: Beige, Black, Dusty Rose"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Budget Recommendations */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-base font-bold text-card-foreground">
          {t("style.budget")}
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">100 {t("shop.sar")}</span>
            <span className="font-bold text-primary">{budget[0]} {t("shop.sar")}</span>
            <span className="text-muted-foreground">2000 {t("shop.sar")}</span>
          </div>
          <Slider
            value={budget}
            onValueChange={setBudget}
            min={100}
            max={2000}
            step={50}
          />
        </div>

        {/* Occasion */}
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-card-foreground">{t("style.occasion")}</p>
          <div className="flex flex-wrap gap-2">
            {occasions.map((occ) => (
              <button
                key={occ.id}
                onClick={() => setSelectedOccasion(occ.id)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedOccasion === occ.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {t(occ.key)}
              </button>
            ))}
          </div>
        </div>

        <Button className="mt-4 w-full" variant="outline">
          {t("style.recommendations")}
        </Button>
      </div>
    </div>
  )
}
