"use client"

import { Heart, Star, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useLocale } from "@/lib/i18n-context"
import type { Product } from "@/lib/mock-data"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onAddToCart, onSelect }: ProductCardProps) {
  const { locale, t } = useLocale()
  const [liked, setLiked] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <button
        onClick={() => onSelect(product)}
        className={`relative flex h-40 w-full items-center justify-center bg-gradient-to-br ${product.gradient}`}
      >
        <ShoppingCart className="h-10 w-10 text-foreground/15" />
        <span className="absolute start-2 top-2 rounded-md bg-card/80 px-1.5 py-0.5 text-[10px] font-semibold text-card-foreground backdrop-blur-sm">
          {product.brand}
        </span>
      </button>

      {/* Favorite */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute end-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm transition-colors"
      >
        <Heart
          className={`h-4 w-4 transition-colors ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
        <span className="sr-only">Favorite</span>
      </button>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold leading-tight text-card-foreground">
          {product.name[locale]}
        </h3>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews} {t("shop.reviews")})
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">
            {product.price} {t("shop.sar")}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="sr-only">{t("shop.addToCart")}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
