"use client"

import { useState } from "react"
import { Minus, Plus, Trash2, CreditCard, Smartphone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useLocale } from "@/lib/i18n-context"
import type { Product } from "@/lib/mock-data"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

export function CartSheet({
  open,
  onOpenChange,
  items,
  onUpdateQuantity,
  onRemove,
}: CartSheetProps) {
  const { locale, t } = useLocale()
  const [discountCode, setDiscountCode] = useState("")

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
        <SheetHeader className="pb-2">
          <SheetTitle className="text-start">
            {t("shop.cart")} ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t("shop.emptyCart")}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Cart Items */}
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-3">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.product.gradient}`}
                >
                  <CreditCard className="h-6 w-6 text-foreground/15" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {item.product.name[locale]}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                  <p className="text-sm font-bold text-foreground">
                    {item.product.price} {t("shop.sar")}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-foreground">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="ms-1 flex h-7 w-7 items-center justify-center rounded-md text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">{t("shop.remove")}</span>
                  </button>
                </div>
              </div>
            ))}

            <Separator />

            {/* Discount Code */}
            <div className="flex gap-2">
              <Input
                placeholder={t("shop.discountCode")}
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" size="sm">
                {t("shop.apply")}
              </Button>
            </div>

            <Separator />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">{t("shop.total")}</span>
              <span className="text-xl font-bold text-foreground">
                {total} {t("shop.sar")}
              </span>
            </div>

            {/* Payment */}
            <div className="flex gap-2">
              <span className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                <Smartphone className="h-3.5 w-3.5" /> STC Pay
              </span>
              <span className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                <Smartphone className="h-3.5 w-3.5" /> Apple Pay
              </span>
              <span className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                <CreditCard className="h-3.5 w-3.5" /> Card
              </span>
            </div>

            <Button className="w-full" size="lg">
              {t("shop.checkout")} - {total} {t("shop.sar")}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
