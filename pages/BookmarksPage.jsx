import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function BookmarksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookmarks</h1>
        <p className="text-muted-foreground">Posts you've saved for later</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Bookmarks</TabsTrigger>
          <TabsTrigger value="recent">Recently Added</TabsTrigger>
          <TabsTrigger value="read">Read Later</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Sign in to see your bookmarks</p>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Sign in to see your recently added bookmarks</p>
          </div>
        </TabsContent>

        <TabsContent value="read" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Sign in to see your read later list</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
