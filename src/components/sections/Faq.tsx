import { useState } from 'react'

const FAQS = [
  {
    q: '¿Trive es un servicio de taxi o transporte público?',
    a: 'No. Trive es una plataforma tecnológica que conecta a personas que ya van a hacer un trayecto con otras que quieren ir al mismo lugar, para compartir el costo del viaje. No somos una empresa de transporte y no prestamos el servicio de movilidad.',
  },
  {
    q: '¿Cómo se fija el precio del viaje?',
    a: 'Lo acuerdan directamente el conductor y el pasajero dentro de la app. Trive no fija tarifas ni interviene en ese acuerdo.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'El pago del trayecto se acuerda y se realiza directamente entre conductor y pasajero, por el medio que prefieran (efectivo, Nequi, Daviplata, etc.). Trive no retiene ni intermedia ese dinero.',
  },
  {
    q: '¿Los conductores están verificados?',
    a: 'Sí. Antes de habilitar a un conductor para publicar rutas, revisamos su licencia de conducción y los documentos del vehículo (SOAT y tecnomecánica vigentes).',
  },
  {
    q: '¿Dónde está disponible Trive?',
    a: 'Por ahora, en trayectos entre Puerto Tejada y Cali. Iremos sumando más rutas a medida que la comunidad crece.',
  },
  {
    q: '¿Cuándo puedo descargar la app?',
    a: 'Estamos en la etapa final de pruebas antes de publicarla en Google Play. Déjanos tus datos en la sección de descarga para avisarte apenas esté disponible.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Preguntas frecuentes</h2>
      </div>

      <div className="mt-10 divide-y divide-border-subtle rounded-3xl border border-border-subtle bg-surface">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
              >
                <span className="text-sm font-bold text-text-primary sm:text-base">{item.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`shrink-0 text-trive-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <p className="px-5 pb-4.5 text-sm leading-relaxed text-text-secondary sm:px-6">{item.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
