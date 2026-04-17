export default function CharacterName({ children }) {
  if (!children) return null;

  return (
    <div className="inline-flex rounded-full border border-white/15 bg-black/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-accent-soft backdrop-blur-md sm:text-sm">
      {children}
    </div>
  );
}
