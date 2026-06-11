"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDark(true);
    setMounted(true);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen dark:text-gray-100 dark:bg-gray-900 ${dark ? "dark" : ""}`}>
      <Navbar dark={dark} setDark={toggleDark} />
      <main>{children}</main>
    </div>
  );
};

export default ThemeProvider;