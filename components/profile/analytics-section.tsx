"use client"

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { useLocale } from "@/lib/i18n-context"
import {
  styleDNAData,
  trendingCategoriesData,
  browsingVsPurchaseData,
} from "@/lib/mock-data"
import { TrendingUp, Eye, ShoppingBag } from "lucide-react"

export function AnalyticsSection() {
  const { t, locale } = useLocale()

  const pieData = styleDNAData.map((d) => ({
    name: d.name[locale],
    value: d.value,
    fill: d.fill,
  }))

  const barData = trendingCategoriesData.map((d) => ({
    name: d.name[locale],
    count: d.count,
  }))

  const lineData = browsingVsPurchaseData.map((d) => ({
    month: d.month[locale],
    browsing: d.browsing,
    purchase: d.purchase,
  }))

  return (
    <div className="flex flex-col gap-5">
      {/* Style DNA - Donut Chart */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-card-foreground">
          <TrendingUp className="h-4 w-4 text-primary" />
          {t("profile.styleDNA")}
        </h3>
        <div className="mt-3 flex items-center gap-4">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={55}
                dataKey="value"
                strokeWidth={2}
                stroke="var(--color-card)"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-1.5">
            {pieData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-xs text-muted-foreground">
                  {entry.name} ({entry.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Categories - Bar Chart */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-card-foreground">
          <ShoppingBag className="h-4 w-4 text-primary" />
          {t("profile.trendingNow")}
        </h3>
        <div className="mt-3">
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={barData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={60}
                tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="count"
                fill="var(--color-primary)"
                radius={[0, 6, 6, 0]}
                barSize={14}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Browsing vs Purchase - Line Chart */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-card-foreground">
          <Eye className="h-4 w-4 text-primary" />
          {t("profile.browsingVsPurchase")}
        </h3>
        <div className="mt-3">
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={lineData}>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="browsing"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{ r: 3, fill: "var(--color-primary)" }}
                name={locale === "ar" ? "تصفح" : "Browsing"}
              />
              <Line
                type="monotone"
                dataKey="purchase"
                stroke="var(--color-accent)"
                strokeWidth={2}
                dot={{ r: 3, fill: "var(--color-accent)" }}
                name={locale === "ar" ? "شراء" : "Purchase"}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-4 rounded bg-primary" />
              <span>{locale === "ar" ? "تصفح" : "Browsing"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-4 rounded bg-accent" />
              <span>{locale === "ar" ? "شراء" : "Purchase"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-bold text-card-foreground">{t("profile.insights")}</h3>
        <div className="mt-3 flex flex-col gap-2">
          {[
            {
              en: "You browse 3x more on weekends",
              ar: "تتصفحين ٣ أضعاف في عطلة نهاية الأسبوع",
            },
            {
              en: "Black is your most purchased color",
              ar: "الأسود هو اللون الأكثر شراءً لديك",
            },
            {
              en: "You save 22% with discount codes",
              ar: "توفرين ٢٢٪ باستخدام أكواد الخصم",
            },
          ].map((insight, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-muted/50 px-3 py-2">
              <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <p className="text-xs text-muted-foreground">{insight[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
