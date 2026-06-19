"use client"
import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchPage = ({ search, setSearch }) => {

  const [query, setQuery] = useState("");

  const searchData = [
    { title: "Overview", desc: "About me, tech stack, and current focus", href: "/" },
    { title: "Projects", desc: "About my projects", href: "/projects" },
    { title: "Contact", desc: "Get in touch", href: "/contact" },
    { title: "Blog", desc: "My thoughts and experiences", href: "/blogs" },
    { title: "Resume", desc: "My professional background and experience", href: "/contact" },
  ]

  const filtered = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-10"
      onClick={() => setSearch(!search)}
    >
      <div
        className="w-full max-w-3xl h-[70vh] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Search Input */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 flex-1">
            <Search size={20} className="text-gray-500" />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search on this website..."
              autoFocus
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>

          <button
            onClick={() => setSearch(!search)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 overflow-y-auto flex-1">
          {query.trim() === "" ? (
            <p className="text-center text-gray-400 dark:text-gray-500 mt-10">
              Start typing to search...
            </p>
          ) : filtered.length > 0 ? (
            filtered.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition mb-2"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </a>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
              No results found for "{query}"
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchPage;