export function Hero() {
  return (
    <section className="relative overflow-hidden bg-trive-primary">
      <img
        src="/photos/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-trive-primary/85" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-trive-light/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-trive-darkest/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/photos/hero-bg-thumb.jpg"
              alt="Conductor y pasajero compartiendo un viaje"
              className="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-lg"
            />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Puerto Tejada ↔ Cali
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.25)] sm:text-5xl">
            Publica tu ruta.
            <br />
            Reserva tu cupo.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Los conductores publican los trayectos que ya van a hacer, con cupos y precio fijo. Tú buscas, reservas tu cupo al instante y coordinas el encuentro por chat.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#descarga"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-trive-primary transition-transform duration-200 hover:scale-[1.03]"
            >
              Descargar app
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute inset-x-10 -bottom-10 h-16 rounded-full bg-black/50 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_10px_15px_-3px_rgba(5,15,40,0.4),0_30px_40px_-10px_rgba(5,15,40,0.55),0_70px_120px_-25px_rgba(5,15,40,0.65)]">
            <img src="/photos/hero-card.jpg" alt="Pasajero viajando en el trayecto compartido" className="block w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
