const STEPS = [
  {
    title: 'Publica o busca tu ruta',
    body: 'Los conductores publican su ruta con los cupos disponibles y el precio por cupo. Los pasajeros buscan la que les sirve por fecha, origen y destino.',
    illustration: '/illustrations/searching.svg',
  },
  {
    title: 'Reserva tu cupo',
    body: 'Eliges el cupo que te sirve y confirmas la reserva al instante, sin esperar a que el conductor acepte.',
    illustration: '/illustrations/chatting.svg',
  },
  {
    title: 'Viajen compartiendo el gasto',
    body: 'Le pagas directo al conductor el valor del cupo y coordinan el punto de encuentro por chat. Trive no cobra ni retiene ese pago.',
    illustration: '/illustrations/payments.svg',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-primary [text-shadow:0_1px_1px_rgba(15,26,46,0.08)] sm:text-4xl">Cómo funciona</h2>
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
