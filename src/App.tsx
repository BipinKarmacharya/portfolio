// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter basename="/portfolio">
    <Routes>
      {/* This handles the main page */}
      <Route path="/" element={<Index />} />
      
      {/* This is your safety net. 
          If you click a button and the URL changes to /about, 
          this 'path="*"' catches it and shows the error.
          By using the Navbar code above, we prevent this from ever being triggered.
      */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;


// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Index from "./pages/Index.tsx";
// import NotFound from "./pages/NotFound.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </HashRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
