"use client"

import { Plus } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import { socialPosts, stories } from "@/lib/mock-data"
import { PostCard } from "./post-card"
import { ContestBanner } from "./contest-banner"
import { Button } from "@/components/ui/button"

export function SocialPage() {
  const { t, locale } = useLocale()

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {t("social.title")}
        </h2>
      </div>

      {/* Stories */}
      <div className="flex gap-3 overflow-x-auto px-4 scrollbar-none">
        {/* Add Story */}
        <div className="flex shrink-0 flex-col items-center gap-1">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-primary bg-primary/5">
            <Plus className="h-5 w-5 text-primary" />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">
            {locale === "ar" ? "أضيفي" : "Add"}
          </span>
        </div>
        {/* Story Avatars */}
        {stories.map((story) => (
          <div key={story.id} className="flex shrink-0 flex-col items-center gap-1">
            <div className="rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
              <div
                className={`flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br ${story.gradient}`}
              >
                <span className="text-sm font-bold text-foreground/50">
                  {story.name[locale].charAt(0)}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">
              {story.name[locale]}
            </span>
          </div>
        ))}
      </div>

      {/* Contest Banner */}
      <div className="px-4">
        <ContestBanner />
      </div>

      {/* Post Feed */}
      <div className="flex flex-col gap-3 px-4">
        {socialPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Floating Share Button */}
      <div className="fixed bottom-20 end-4 z-40 max-w-md">
        <Button className="flex items-center gap-2 rounded-full px-5 py-3 shadow-lg" size="lg">
          <Plus className="h-4 w-4" />
          {t("social.shareYourLook")}
        </Button>
      </div>
    </div>
  )
}
