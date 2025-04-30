"use client"
import * as React from "react";
import { useState } from "react"
import { PostCard } from "./post-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export type Post = {
  id: string
  title: string
  content: string
  date: string
  author?: string
  category?: string
  imageUrl?: string
  likes?: number
  comments?: number
}

// Sample initial posts with more data
const initialPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.",
    date: "2023-05-15",
    author: "Sarah Johnson",
    category: "Development",
    imageUrl: "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=400",
    likes: 42,
    comments: 12,
  },
  {
    id: "2",
    title: "Why TypeScript is Amazing",
    content:
      "TypeScript adds static type definitions to JavaScript, helping you catch errors early and making your code more robust. It provides better documentation and a more productive development experience with features like autocompletion and type checking.",
    date: "2023-05-20",
    author: "Michael Chen",
    category: "Programming",
    imageUrl: "https://assets-eu-01.kc-usercontent.com/5dddefee-e8bb-013a-3b4e-7907971cf825/36961122-2fd0-4bd1-8aad-40c4c5dfa139/benefits_of_typescript_without_typescript_blog_index.webp?height=200&width=400",
    likes: 38,
    comments: 8,
  },
  {
    id: "3",
    title: "The Power of Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML or having to write CSS.",
    date: "2023-05-25",
    author: "Alex Rodriguez",
    category: "Design",
    imageUrl: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxm1216st743rp3vmrc5d.png?height=200&width=400",
    likes: 56,
    comments: 15,
  },
  {
    id: "4",
    title: "Server Components in React",
    content:
      "Server Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.",
    date: "2023-06-01",
    author: "Jamie Taylor",
    category: "React",
    imageUrl: "https://www.joshwcomeau.com/images/server-components/bright.png?height=200&width=400",
    likes: 29,
    comments: 7,
  },
  {
    id: "5",
    title: "Building Accessible Web Applications",
    content:
      "Accessibility is essential for developers and organizations that want to create high-quality websites and web tools, and not exclude people from using their products and services. Learn how to make your web applications accessible to everyone.",
    date: "2023-06-05",
    author: "Robin Patel",
    category: "Accessibility",
    imageUrl: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwgecw23wlv1aamgvkfx5.jpg?height=200&width=400",
    likes: 47,
    comments: 9,
  },
  {
    id: "6",
    title: "The Future of Web Development",
    content:
      "The web development landscape is constantly evolving with new technologies, frameworks, and best practices. Stay ahead of the curve by learning about the latest trends and how they might shape the future of web development.",
    date: "2023-06-10",
    author: "Jordan Lee",
    category: "Trends",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20240509115836/The-Future-of-Web-Development-[Top-Trends-and-Predictions].webp?height=200&width=400",
    likes: 63,
    comments: 21,
  },
]

export function PostGrid() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [activeTab, setActiveTab] = useState("all")

  // Filter posts by category
  const filterPosts = (category: string) => {
    if (category === "all") return posts
    return posts.filter((post) => post.category?.toLowerCase() === category.toLowerCase())
  }

  // Add this function to add new posts (will be called from the form component)
  function addPost(newPost: Post) {
    setPosts((prevPosts) => [newPost, ...prevPosts])
  }

  // Make the addPost function available globally
  if (typeof window !== "undefined") {
    ;(window as any).addPost = addPost
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6 grid w-full grid-cols-4 md:w-auto md:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        {["development", "design", "react", "accessibility", "trends"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filterPosts(category).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
