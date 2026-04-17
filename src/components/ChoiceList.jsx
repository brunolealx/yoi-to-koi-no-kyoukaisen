export default function ChoiceList({ choices, onSelect }) {
  if (!choices?.length) return null;

  return (
    <div className="mt-4 grid gap-3">
      {choices.map((choice) => (
        <button
          key={choice.text}
          type="button"
          onClick={() => onSelect(choice)}
          className="group rounded-[1.6rem] border border-white/12 bg-white/7 px-5 py-4 text-left text-sm leading-6 text-white/88 transition duration-200 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-white/12 hover:text-white sm:text-base"
        >
          <span className="block font-medium">{choice.text}</span>
          <span className="mt-1 block text-xs tracking-[0.16em] text-white/45 transition group-hover:text-accent-soft/85">
            Escolher este caminho
          </span>
        </button>
      ))}
    </div>
  );
}
