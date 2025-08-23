import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import BlogIndex from "@/pages/blog";
import CategoryPage from "@/pages/blog/category/category";
import PostPage from "@/pages/blog/post/post";
import AllPostsPage from "./pages/blog/all";
import './index.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/category/:slug" component={CategoryPage} />
      <Route path="/blog/post/:slug" component={PostPage} />
      <Route path="/blog/all" component={AllPostsPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
