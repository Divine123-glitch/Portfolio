function SectionTitle({ isDark, eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className={`mb-3 text-sm uppercase tracking-[0.35em] ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      <p className={`mt-4 text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{description}</p>
    </div>
  );
}

export default SectionTitle;
