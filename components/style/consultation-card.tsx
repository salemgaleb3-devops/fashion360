"use client"

import { Star, Video, Calendar } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useLocale } from "@/lib/i18n-context"
import type { Expert } from "@/lib/mock-data"

interface ConsultationCardProps {
  expert: Expert
}

export function ConsultationCard({ expert }: ConsultationCardProps) {
  const { locale, t } = useLocale()
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        {/* Avatar */}
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${expert.gradient}`}
        >
          <span className="text-lg font-bold text-foreground/40">
            {expert.name[locale].charAt(0)}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-card-foreground">
            {expert.name[locale]}
          </h4>
          <p className="text-xs text-muted-foreground">
            {expert.specialty[locale]}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span className="text-xs font-medium text-foreground">{expert.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {expert.price} {t("shop.sar")} / {t("style.perSession")}
            </span>
          </div>
          <Button
            size="sm"
            className="mt-2"
            onClick={() => setBookingOpen(true)}
          >
            <Video className="me-1 h-3.5 w-3.5" />
            {t("style.bookSession")}
          </Button>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>
              {t("style.bookSession")} - {expert.name[locale]}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              {expert.specialty[locale]}
            </p>
            <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">
                {locale === "ar" ? "اختاري موعد الجلسة" : "Select session date & time"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["10:00 AM", "2:00 PM", "6:00 PM"].map((time) => (
                <button
                  key={time}
                  className="rounded-lg border border-border bg-card px-2 py-2 text-xs font-medium text-card-foreground hover:border-primary"
                >
                  {time}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2">
              <span className="text-sm font-medium text-foreground">{t("shop.total")}</span>
              <span className="text-sm font-bold text-primary">
                {expert.price} {t("shop.sar")}
              </span>
            </div>
            <Button className="w-full" onClick={() => setBookingOpen(false)}>
              <Video className="me-2 h-4 w-4" />
              {t("style.videoCall")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
