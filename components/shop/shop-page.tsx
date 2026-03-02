"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, ShoppingCart, Tag } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import { products } from "@/lib/mock-data"
import type { Product } from "@/lib/mock-data"
import { ProductCard } from "./product-card"
import { ProductDetailSheet } from "./product-detail-sheet"
import { CartSheet, type CartItem } from "./cart-sheet"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", key: "shop.category.all" },
  { id: "clothing", key: "shop.category.clothing" },
  { id: "shoes", key: "shop.category.shoes" },
  { id: "bags", key: "shop.category.bags" },
  { id: "accessories", key: "shop.category.accessories" },
]

const stores = ["Zara", "H&M", "Farfetch", "Ounass", "Namshi"]

export function ShopPage() {
  const { t, locale } = useLocale()
  const [activeCategory, setActiveCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory
    const matchesSearch =
      search === "" ||
      p.name[locale].toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  function updateQuantity(productId: string, quantity: number) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  function removeFromCart(productId: string) {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Search Bar */}
      <div className="flex items-center gap-2 px-4 pt-4">
        <div className="relative flex-1">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("shop.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-xl border border-input bg-card ps-9 pe-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-card text-card-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Filters</span>
        </button>
      </div>

      {/* Offers Banner */}
      <div className="mx-4 flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary/15 to-accent/15 px-4 py-3">
        <Tag className="h-5 w-5 text-primary" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{t("shop.offers")}</p>
          <p className="text-xs text-muted-foreground">
            {locale === "ar" ? "خصم حتى ٤٠٪ على ماركات مختارة" : "Up to 40% off on selected brands"}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto px-4 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {t(cat.key)}
          </button>
        ))}
      </div>

      {/* Store Badges */}
      <div className="flex gap-2 overflow-x-auto px-4 scrollbar-none">
        {stores.map((store) => (
          <span
            key={store}
            className="shrink-0 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground"
          >
            {store}
          </span>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onSelect={(p) => {
              setSelectedProduct(p)
              setDetailOpen(true)
            }}
          />
        ))}
      </div>

      {/* Floating Cart Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-20 end-4 z-40 max-w-md">
          <Button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 rounded-full px-5 py-3 shadow-lg"
            size="lg"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{t("shop.cart")} ({cartItems.reduce((s, i) => s + i.quantity, 0)})</span>
          </Button>
        </div>
      )}

      {/* Product Detail Sheet */}
      <ProductDetailSheet
        product={selectedProduct}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onAddToCart={addToCart}
      />

      {/* Cart Sheet */}
      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  )
}
