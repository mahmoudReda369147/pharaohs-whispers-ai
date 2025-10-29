import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ReadLanguagePage from "./pages/ReadLanguagePage";
import SelectPharaohPage from "./pages/SelectPharaohPage";
import PharaohChatPage from "./pages/PharaohChatPage";
import MusicVideoPage from "./pages/MusicVideoPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ReadLanguagePage />} />
            <Route path="/select-pharaoh" element={<SelectPharaohPage />} />
            <Route path="/chat/:pharaohId" element={<PharaohChatPage />} />
            <Route path="/gallery" element={<MusicVideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
