export function Coverage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-10 rounded-3xl bg-trive-primary px-6 py-12 sm:px-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white">
            Dónde operamos hoy
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">Puerto Tejada y Cali, por ahora</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Trive está en una etapa inicial, conectando a quienes viajan entre Puerto Tejada y Cali. La idea es llegar a más rutas a medida que la comunidad crece.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {['Puerto Tejada', 'Cali'].map((city) => (
            <li key={city} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3.5 text-sm font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
