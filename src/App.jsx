import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

// Shared page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 32, filter: "blur(4px)" },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 0.84, 0.44, 1] }
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(6px)",
    transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] }
  }
};

// Strip (step) reveal variants
const stripVariants = {
  initial: { scaleY: 1, transformOrigin: "top" },
  animate: (i) => ({
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      delay: (4 - i) * 0.12, // right -> left reveal
      duration: 0.7,
      ease: [0.65, 0, 0.35, 1]
    }
  }),
  exit: { scaleY: 0 }
};

// Wrapper component applying both fade/blur motion + strip reveal overlay
const PageWrapper = ({ children }) => {
  const [showReveal, setShowReveal] = useState(true);

  useEffect(() => {
    // Hide the overlay after animation completes
    const t = setTimeout(() => setShowReveal(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}

      {/* Step reveal overlay (only on mount of each page) */}
      <AnimatePresence>
        {showReveal && (
          <motion.div
            key="route-reveal"
            className="pointer-events-none fixed inset-0 z-40 flex" /* z below Navbar (z-50) so Navbar unaffected */
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={stripVariants}
                className="flex-1 h-full bg-black"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
