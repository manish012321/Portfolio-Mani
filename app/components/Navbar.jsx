"use client";
import React, { useState } from "react";
import { BookOpen, CalendarCheck, Download, FolderKanban, LayoutDashboard, Mail, Menu, Moon, Search, Sun, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Searchpage from "./Searchpage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ dark, setDark }) => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(true);

  const navLinks = [
    { name: "Overview", icon: <LayoutDashboard size={18} />, href: "/" },
    { name: "Projects", icon: <FolderKanban size={18} />, href: "/projects" },
    { name: "Blogs", icon: <BookOpen size={18} />, href: "/blogs" },
    { name: "Contact", icon: <Mail size={18} />, href: "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-slate-100 dark:bg-black shadow-sm">

        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-md text-sm">
            MS
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
              Manish Suriyal
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Search — hidden on mobile */}
          {search ? (
            <button
              onClick={() => setSearch(!search)}
              aria-label="Open search"
              className="hidden md:flex group items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Search size={18} className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Search</span>
              <kbd className="hidden sm:flex items-center px-2 py-1 text-xs font-mono rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                Shift + /
              </kbd>
            </button>
          ) : (
            <Searchpage search={search} setSearch={setSearch} />
          )}

          {/* Mobile Search Icon only */}
          <button
            onClick={() => setSearch(!search)}
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            <Search size={18} />
          </button>

          <div className="w-px h-5 bg-gray-400 dark:bg-gray-600" />

          {/* Theme Toggle */}
          <button
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="w-px h-5 bg-gray-400 dark:bg-gray-600" />

          {/* Menu Toggle */}
          <button
            aria-label="Menu"
            onClick={() => setMenu(!menu)}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </header>

      {/* Nav Links */}
      <header className="sticky top-[56px] z-40 bg-slate-100 dark:bg-black border-b border-gray-300 dark:border-gray-700 shadow-sm overflow-x-auto">
        <nav className="flex w-max md:w-full px-2 md:px-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-3 text-sm whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors
                ${pathname === item.href ? "border-b-2 border-orange-500 font-medium" : "text-gray-600 dark:text-gray-400"}`}
            >
              {/* Hide icons on very small screens */}
              <span className="hidden sm:block">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <a
            href="/manish_suriyal_cv.pdf"
            download="Manish_Suriyal_Resume.pdf"
            className='flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-600 transition-all text-sm font-medium text-gray-700 dark:text-gray-200'
          >
            <Download size={16} />
          </a>
        </nav>
      </header>

      {/* Sidebar */}
      {menu && <Sidebar menu={menu} setMenu={setMenu} />}
    </>
  );
};

export default Navbar;