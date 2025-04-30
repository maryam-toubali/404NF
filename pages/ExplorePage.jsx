import { PostGrid } from "../components/post-grid"

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Explore</h1>
        <p className="text-muted-foreground">Discover new content from across the platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Development",
              "Design",
              "React",
              "JavaScript",
              "UI/UX",
              "Accessibility",
              "TypeScript",
              "CSS",
              "Web Development",
              "Frontend",
              "Backend",
            ].map((category) => (
              <div key={category} className="rounded-full bg-muted px-3 py-1 text-sm">
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">Popular Authors</h2>
          <div className="space-y-3">
            {["Sarah Johnson", "Michael Chen", "Alex Rodriguez", "Jamie Taylor", "Robin Patel"].map((author) => (
              <div key={author} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">{author.charAt(0)}</div>
                <span>{author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
        <PostGrid limit={6} />
      </div>
    </div>
  )
}
