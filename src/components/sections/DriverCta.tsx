import { Reveal } from '../Reveal'

const ITEMS = [
  {
    title: 'Publica en segundos',
    body: 'Tú defines la ruta, los cupos disponibles y el precio. Solo publicas los viajes que ya vas a hacer.',
    illustration: '/illustrations/maker-launch.svg',
  },
  {
    title: 'Cobras directo',
    body: 'El pasajero te paga a ti, por el medio que elijas. Trive no retiene ni intermedia ese pago.',
    illustration: '/illustrations/payments.svg',
  },
  {
    title: 'Tú decides cuándo',
    body: 'Sin turnos ni horarios impuestos. Publicas cuando te sirve y cancelas sin problema si no te conviene.',
    illustration: '/illustrations/confident.svg',
  },
]

export function DriverCta() {
  return (
    <section id="conductores" className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-trive-tint px-3 py-1 text-[11px] font-bold text-trive-primary">
              Para conductores
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary [text-shadow:0_1px_1px_rgba(15,26,46,0.08)] sm:text-4xl">
              ¿Tienes carro? Gana dinero con los viajes que ya vas a hacer
            </h2>
            <p className="mt-3 max-w-md text-text-secondary">
              Si ya vas de un lugar a otro, publica tu ruta y comparte el gasto con quienes van para el mismo lado.
            </p>
            <a
              href="#descarga"
              className="mt-7 inline-flex items-center rounded-full bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              Publícate como conductor
            </a>
          </div>
          <img src="/illustrations/travelers.svg" alt="" className="mx-auto w-full max-w-[280px] sm:max-w-xs" />
        </Reveal>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-[0_20px_40px_-20px_rgba(15,26,46,0.15)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-36 items-center justify-center bg-trive-tint/50">
                <img src={item.illustration} alt="" className="h-28 w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
