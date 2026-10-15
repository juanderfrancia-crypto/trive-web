const STEPS = [
  {
    title: 'Publica o busca tu ruta',
    body: 'Los conductores publican trayectos que ya van a hacer. Los pasajeros buscan el que les sirve por fecha y lugar de encuentro.',
    illustration: '/illustrations/searching.svg',
  },
  {
    title: 'Conecta y acuerden los detalles',
    body: 'Hablen por el chat dentro de la app: punto de encuentro, hora y el valor que le corresponde a cada quien.',
    illustration: '/illustrations/chatting.svg',
  },
  {
    title: 'Viajen compartiendo el gasto',
    body: 'El conductor ya iba a hacer ese trayecto. El pasajero aporta una parte justa del costo: combustible, peajes y desgaste.',
    illustration: '/illustrations/payments.svg',
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
              <span className="block text-xs font-bold text-text-muted">Paso {i + 1}</span>
              <h3 className="mt-1 text-lg font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
