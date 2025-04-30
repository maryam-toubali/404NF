import * as React from "react";

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  content: z
    .string()
    .min(10, {
      message: "Content must be at least 10 characters.",
    })
    .max(1000, {
      message: "Content must not exceed 1000 characters.",
    }),
  author: z
    .string()
    .min(2, {
      message: "Author name must be at least 2 characters.",
    })
    .max(50, {
      message: "Author name must not exceed 50 characters.",
    }),
  category: z.string({
    required_error: "Please select a category.",
  }),
})

export function AddPostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      content: "",
      author: "",
      category: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate network request
    setTimeout(() => {
      // Create a new post object
      const newPost = {
        id: Date.now().toString(),
        title: values.title,
        content: values.content,
        author: values.author,
        category: values.category,
        date: new Date().toISOString().split("T")[0],
        imageUrl: "/placeholder.svg?height=200&width=400",
        likes: 0,
        comments: 0,
      }

      // Add the post to the grid (using the globally exposed function)
      if (typeof window !== "undefined" && (window as any).addPost) {
        ;(window as any).addPost(newPost)
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success state after animation
      setTimeout(() => {
        setIsSuccess(false)
        // Reset the form
        form.reset()
      }, 2000)
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter post title" {...field} />
                </FormControl>
                <FormDescription>Create a compelling title for your post.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Development">Development</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="React">React</SelectItem>
                      <SelectItem value="Accessibility">Accessibility</SelectItem>
                      <SelectItem value="Trends">Trends</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your post content here..."
                  className="min-h-[200px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Share your thoughts, ideas, or knowledge.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Cancel
          </Button>
          <Button type="submit" className="min-w-[120px]" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Publishing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Published!
              </>
            ) : (
              "Publish Post"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
