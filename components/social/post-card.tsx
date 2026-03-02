"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, Send } from "lucide-react"
import { useLocale } from "@/lib/i18n-context"
import { Input } from "@/components/ui/input"
import type { SocialPost } from "@/lib/mock-data"

interface PostCardProps {
  post: SocialPost
}

export function PostCard({ post }: PostCardProps) {
  const { locale, t } = useLocale()
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  function handleLike() {
    setLiked(!liked)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      {/* User Header */}
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.user.gradient}`}
        >
          <span className="text-sm font-bold text-foreground/50">
            {post.user.name[locale].charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-card-foreground">
            {post.user.name[locale]}
          </p>
          <p className="text-xs text-muted-foreground">
            {post.user.handle} &middot; {post.timestamp}
          </p>
        </div>
      </div>

      {/* Post Image */}
      <div
        className={`flex h-48 items-center justify-center rounded-xl bg-gradient-to-br ${post.gradient}`}
      >
        <Share2 className="h-10 w-10 text-foreground/10" />
      </div>

      {/* Caption */}
      <p className="text-sm leading-relaxed text-card-foreground">
        {post.caption[locale]}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button onClick={handleLike} className="flex items-center gap-1.5">
          <Heart
            className={`h-5 w-5 transition-colors ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
          <span className="text-xs text-muted-foreground">
            {likeCount} {t("social.likes")}
          </span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5"
        >
          <MessageCircle className="h-5 w-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {post.commentCount} {t("social.comments")}
          </span>
        </button>
        <button className="flex items-center gap-1.5">
          <Share2 className="h-5 w-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{t("social.share")}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="flex flex-col gap-2 border-t border-border pt-3">
          {post.comments.map((comment, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                {comment.user.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-semibold text-card-foreground">
                  {comment.user}
                </span>
                <p className="text-xs text-muted-foreground">{comment.text[locale]}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <Input
              placeholder={t("social.writeComment")}
              className="h-8 flex-1 text-xs"
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Send className="h-3.5 w-3.5" />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
