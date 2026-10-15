const STEPS = [
  {
    title: 'Publica o busca tu ruta',
    body: 'Los conductores publican trayectos que ya van a hacer. Los pasajeros buscan el que les sirve por fecha y lugar de encuentro.',
    illustration: '/illustrations/searching.svg',
    icon: (
      <path d="M9 20H5a2 2 0 0 1-2-2V9l9-7 9 7v9a2 2 0 0 1-2 2h-4M9 20v-6h6v6M9 20h6" />
    ),
  },
  {
    title: 'Conecta y acuerden los detalles',
    body: 'Hablen por el chat dentro de la app: punto de encuentro, hora y el valor que le corresponde a cada quien.',
    illustration: '/illustrations/chatting.svg',
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    ),
  },
  {
    title: 'Viajen compartiendo el gasto',
    body: 'El conductor ya iba a hacer ese trayecto. El pasajero aporta una parte justa del costo: combustible, peajes y desgaste.',
    illustration: '/illustrations/payments.svg',
    icon: (
      <>
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M5 18H3V8l3-5h9l4 6h2v9h-2M5 18h8" />
      </>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Cómo funciona</h2>
        <p className="mt-3 text-text-secondary">Tres pasos, sin complicaciones.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-[0_20px_40px_-20px_rgba(15,26,46,0.15)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex h-36 items-center justify-center bg-trive-tint/50">
              <img src={step.illustration} alt="" className="h-28 w-auto object-contain" />
            </div>
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trive-tint text-trive-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {step.icon}
                </svg>
              </div>
              <span className="mt-4 block text-xs font-bold text-text-muted">Paso {i + 1}</span>
              <h3 className="mt-1 text-lg font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
