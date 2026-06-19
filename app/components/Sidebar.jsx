import { X, LayoutDashboard, FolderKanban, BookOpen, CalendarCheck, Mail, MapPin, GitBranch, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = ({ menu, setMenu }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Overview",    icon: <LayoutDashboard size={18} />, href: "/" },
    { name: "Projects",    icon: <FolderKanban size={18} />,    href: "/projects" },
    { name: "Blogs",       icon: <BookOpen size={18} />,        href: "/blogs" },
      { name: "Contact",     icon: <Mail size={18} />,            href: "/contact" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setMenu(false)}
      />

      {/* Sidebar */}
      <div
        className="fixed top-0 right-0 h-full w-72 bg-gray-200 dark:bg-[#0D1117] shadow-xl z-50 flex flex-col overflow-y-auto animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenu(false)}
            className="p-2 rounded-lg border border-gray-300 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-center gap-4 px-6 pb-6">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-2 dark:ring-offset-zinc-900">
            <Image
              src="/image.png"
              alt="Manish Suriyal"
              height={96}
              width={96}
              priority
              className="aspect-square object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Manish Suriyal
            </h1>
            <span className="inline-block mt-1 px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
              Full Stack Developer
            </span>
          </div>

          {/* Bio */}
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            🌱 Learning, building, and growing — one project at a time.
          </p>

          {/* Divider */}
          <div className="w-full border-t border-gray-200 dark:border-zinc-700" />

          {/* Location & GitHub */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-xs">Uttarakhand, India</span>
            </div>
            <Link
              href="https://github.com/manish012321"
              target="_blank"
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <GitBranch size={14} className="text-blue-500" />
              <span>github.com/manishsuriyal</span>
              <ExternalLink size={10} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-4 w-full justify-center">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">5</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-zinc-700" />
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">Mern</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Stack</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-zinc-700" />
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">10+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Technologies Learned</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-200 dark:border-zinc-700" />

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 w-full">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenu(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${pathname === item.href
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

        </div>

        {/* Footer */}
        <div className="mt-auto px-5 py-4 border-t border-gray-200 dark:border-zinc-700">
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            © 2026 Manish Suriyal
          </p>
        </div>

      </div>
    </>
  );
};

export default Sidebar;