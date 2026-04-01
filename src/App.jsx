import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";
// import Terms from "./pages/Terms";
// import About from "./pages/About";

// Wrapper for animation + scroll
function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <Header />

      <AnimatedRoutes />

      <BackToTop />
      <Footer />
    </HashRouter>
  );
}
