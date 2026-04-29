const steps = [
  ['01', 'Fill your emergency data', 'Keep only the information responders actually need.'],
  ['02', 'Generate your QR', 'Create a readable emergency payload from your profile.'],
  ['03', 'Print or save the sticker', 'Export a clean label for helmet, motorcycle or jacket.'],
  ['04', 'Ride with visibility', 'Designed for scanning under pressure, not decoration.'],
];

export function Steps() {
  return (
    <section className="no-print mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="How Apex Ride works">
      {steps.map(([number, title, copy]) => (
        <article key={number} className="premium-card p-5 transition duration-200 ease-premium hover:-translate-y-1 hover:shadow-premium">
          <span className="text-sm font-black text-apex-blue">{number}</span>
          <h2 className="mt-4 text-lg font-black tracking-tight text-apex-ink">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-apex-muted">{copy}</p>
        </article>
      ))}
    </section>
  );
}
