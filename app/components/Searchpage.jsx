import React from "react";
import { Search, X } from "lucide-react";

const SearchPage = ({ search, setSearch }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-10"
      onClick={() => setSearch(!search)}
    >
      <div
        className="w-full max-w-3xl h-[70vh] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
       
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 flex-1">
            <Search size={20} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search on this website..."
              autoFocus
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>

          <button
            onClick={() => setSearch(!search)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 overflow-y-auto h-full">
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            Start typing to search...
          </div>
        </div>


      </div>
    </div>
  );
};

export default SearchPage;