import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <a href="#home" className="focus-ring text-lg font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-accent via-electric to-orange bg-clip-text text-transparent">
              Jeevan.dev
            </span>
          </a>

          <div className="hidden items-baseline justify-center gap-8 whitespace-nowrap xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </nav>

        <div
          className="mt-3 flex gap-5 overflow-x-auto pb-1 xl:hidden"
          role="navigation"
          aria-label="Mobile section navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
