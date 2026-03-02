"use client"

import { useState } from "react"
import { Star, ShoppingCart, CreditCard, Smartphone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n-context"
import type { Product } from "@/lib/mock-data"

interface ProductDetailSheetProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddToCart: (product: Product) => void
}

export function ProductDetailSheet({
  product,
  open,
  onOpenChange,
  onAddToCart,
}: ProductDetailSheetProps) {
  const { locale, t } = useLocale()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  if (!product) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
        <SheetHeader className="pb-2">
          <SheetTitle className="text-start">{product.name[locale]}</SheetTitle>
        </SheetHeader>

        {/* Product Image */}
        <div className={`flex h-48 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient}`}>
          <ShoppingCart className="h-16 w-16 text-foreground/15" />
        </div>

        {/* Details */}
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{product.brand}</p>
              <p className="text-2xl font-bold text-foreground">
                {product.price} {t("shop.sar")}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">{t("shop.size")}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-card-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">{t("shop.color")}</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    selectedColor === color ? "border-primary scale-110" : "border-border"
                  }`}
                  style={{ backgroundColor: color }}
                >
                  <span className="sr-only">{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">{t("shop.payment")}</p>
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
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              onAddToCart(product)
              onOpenChange(false)
            }}
          >
            <ShoppingCart className="me-2 h-4 w-4" />
            {t("shop.addToCart")} - {product.price} {t("shop.sar")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
