"use client"

import { useState } from "react"
import { PostGrid } from "../components/post-grid"
import { AddPostForm } from "../components/add-post-form"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="space-y-10">
      {/* Create Post Section */}
      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
        <AddPostForm simplified={true} />
      </section>

      {/* Posts Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            <p className="text-muted-foreground">Discover fresh ideas and perspectives</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Most Recent
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Popular
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-3 md:w-auto md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <PostGrid category="all" />
          </TabsContent>

          {["development", "design", "react", "accessibility", "trends"].map((category) => (
            <TabsContent key={category} value={category}>
              <PostGrid category={category} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  )
}
