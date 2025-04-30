import { PostGrid } from "../components/post-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function TrendingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Trending</h1>
        <p className="text-muted-foreground">See what's popular right now</p>
      </div>

      <Tabs defaultValue="today">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-6">
          <PostGrid sortBy="trending" timeframe="today" />
        </TabsContent>

        <TabsContent value="week" className="mt-6">
          <PostGrid sortBy="trending" timeframe="week" />
        </TabsContent>

        <TabsContent value="month" className="mt-6">
          <PostGrid sortBy="trending" timeframe="month" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
