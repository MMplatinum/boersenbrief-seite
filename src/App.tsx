import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import IndexEN from "./pages/IndexEN";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<IndexEN />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* URL Redirects für alte URLs (Fallback zu .htaccess) */}
          <Route path="/trading-journal" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
          <Route path="/start" element={<Navigate to="/" replace />} />
          <Route path="/trading-journal/de" element={<Navigate to="/" replace />} />
          <Route path="/kontakt" element={<Navigate to="/" replace />} />
          <Route path="/feedback" element={<Navigate to="/" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
