import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { MessageSquare, Heart } from "lucide-react"
import type { Post } from "./post-grid"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className="group h-full overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {post.category && (
          <div className="absolute right-3 top-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              {post.category}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={`https://avatar.vercel.sh/${post.author}`} />
            <AvatarFallback>{post.author ? getInitials(post.author) : "U"}</AvatarFallback>
          </Avatar>
          <CardDescription className="text-xs">
            {post.author || "Anonymous"} • {formattedDate}
          </CardDescription>
        </div>
        <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{post.content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{post.likes || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{post.comments || 0}</span>
          </div>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">Read more</button>
      </CardFooter>
    </Card>
  )
}
