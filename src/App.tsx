import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import IndexEN from "./pages/IndexEN";
import ThankYou from "./pages/ThankYou";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import StarterGuide from './pages/StarterGuide';
import StarterGuideEN from './pages/StarterGuideEN';
import SyncEA from './pages/SyncEA';
import SyncEAEN from './pages/SyncEAEN';
import EA from './pages/EA';
import EAEN from './pages/EAEN';
import Partners from './pages/Partners';
import PartnersEN from './pages/PartnersEN';

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
          <Route path="/tytj" element={<ThankYou />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/starter-guide" element={<StarterGuide />} />
          <Route path="/en/starter-guide" element={<StarterGuideEN />} />
          <Route path="/download/syncea" element={<SyncEA />} />
          <Route path="/en/download/syncea" element={<SyncEAEN />} />
          <Route path="/ea" element={<EA />} />
          <Route path="/en/ea" element={<EAEN />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/en/partners" element={<PartnersEN />} />
          
          {/* URL Redirects für alte URLs (Fallback zu .htaccess) */}
          <Route path="/trading-journal" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
          <Route path="/start" element={<Navigate to="/" replace />} />
          <Route path="/trading-journal/de" element={<Navigate to="/" replace />} />
          <Route path="/kontakt" element={<Navigate to="/" replace />} />
          <Route path="/starter-guide/de" element={<Navigate to="/starter-guide" replace />} />
          <Route path="/starter-guide/en" element={<Navigate to="/en/starter-guide" replace />} />
          <Route path="/feedback" element={<Navigate to="/" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
