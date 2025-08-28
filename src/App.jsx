import React from "react";
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

// Wrapper component to apply transition to each page
const PageWrapper = ({ children }) => (
  <motion.div
    className="min-h-screen w-full"
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<><Hero /></>} />
          <Route path="/about" element={<><About /></>} />
            <Route path="/projects" element={<><Projects /></>} />
          <Route path="/skills" element={<><Skills /></>} />
          <Route path="/contact" element={<><Contact /></>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
