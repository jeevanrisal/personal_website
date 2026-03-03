export default function Footer() {
  return (
    <footer className="border-t border-edge/70">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="font-medium text-slate-200">Jeevan Risal | Based in Sydney, Australia</p>
        </div>
        <div className="md:text-right">
          <p>Built with Next.js, TypeScript, Tailwind CSS</p>
        </div>
      </div>
      <div className="border-t border-edge/70 py-4 text-center text-xs text-slate-500">
        (c) {new Date().getFullYear()} Jeevan Risal
      </div>
    </footer>
  );
}
