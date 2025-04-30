import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { PlusCircle, User } from "lucide-react"
import { Button } from "./components/ui/button"
import HomePage from "./pages/HomePage"
import ExplorePage from "./pages/ExplorePage"
import TrendingPage from "./pages/TrendingPage"
import BookmarksPage from "./pages/BookmarksPage"
import SignInPage from "./pages/SignInPage"

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  )
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1.5">
              <PlusCircle className="h-4 w-4 text-primary-foreground" />
            </div>
            <Link to="/" className="text-xl font-bold tracking-tight">
              PostHub
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/trending">Trending</NavLink>
            <NavLink to="/bookmarks">Bookmarks</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:flex">
              <Link to="/signin">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">{children}</main>

      <footer className="border-t py-6 bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PostHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <ExplorePage />
            </Layout>
          }
        />
        <Route
          path="/trending"
          element={
            <Layout>
              <TrendingPage />
            </Layout>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Layout>
              <BookmarksPage />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignInPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
