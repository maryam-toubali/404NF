import { AddPostForm } from "@/components/add-post-form"
import { PostGrid } from "@/components/post-grid"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-2">
              <PlusCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">PostHub</h1>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Explore
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Trending
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Bookmarks
            </a>
          </nav>
          <Button asChild size="sm" className="rounded-full px-4">
            <a href="#add-post">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="absolute inset-0 bg-grid-white/10 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]"></div>
        <div className="container relative space-y-6 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Share your thoughts
          </div>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover and share ideas with our community
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Join thousands of creators and readers in a space designed for meaningful content
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#add-post">Create a Post</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <a href="#latest-posts">Browse Posts</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container py-12">
        <section id="latest-posts" className="mb-16">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
              <p className="text-muted-foreground">Discover fresh ideas and perspectives</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Most Recent
              </Button>
              <Button variant="ghost" size="sm">
                Popular
              </Button>
            </div>
          </div>
          <PostGrid />
        </section>

        <section id="add-post" className="mx-auto max-w-3xl rounded-xl border bg-card p-8 shadow-lg">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-bold">Share Your Thoughts</h2>
            <p className="text-muted-foreground">Create a new post to share with the community</p>
          </div>
          <AddPostForm />
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary p-1.5">
                <PlusCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">PostHub</span>
            </div>
            <nav className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Community
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Support
              </a>
            </nav>
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PostHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
