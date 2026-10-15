import { useState } from 'react'
import { Reveal } from '../Reveal'

const FAQS = [
  {
    q: '¿Trive es un servicio de taxi o transporte público?',
    a: 'No. Trive es una plataforma tecnológica que conecta a personas que ya van a hacer un trayecto con otras que quieren ir al mismo lugar, para compartir el costo del viaje. No somos una empresa de transporte y no prestamos el servicio de movilidad.',
  },
  {
    q: '¿Cómo reservo un cupo?',
    a: 'Buscas tu ruta, ves los cupos disponibles en tiempo real, eliges el tuyo y confirmas la reserva al instante. Después usas el chat de la app para coordinar el punto exacto de encuentro con el conductor.',
  },
  {
    q: '¿Cómo se fija el precio del viaje?',
    a: 'El conductor lo define libremente al publicar la ruta. El precio por cupo queda fijo desde la publicación — Trive no lo negocia ni lo cambia.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Le pagas directo al conductor, por el medio que haya habilitado (efectivo, Nequi, Daviplata, etc.). Trive no retiene ni intermedia ese dinero.',
  },
  {
    q: '¿Los conductores están verificados?',
    a: 'Sí. Antes de habilitar a un conductor para publicar rutas, revisamos su licencia de conducción y los documentos del vehículo (SOAT y tecnomecánica vigentes).',
  },
  {
    q: '¿Dónde está disponible Trive?',
    a: 'Por ahora, en trayectos entre Puerto Tejada y Cali, y sus alrededores. Iremos sumando más rutas a medida que la comunidad crece.',
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
        <h2 className="text-3xl font-extrabold tracking-tight text-text-primary [text-shadow:0_1px_1px_rgba(15,26,46,0.08)] sm:text-4xl">Preguntas frecuentes</h2>
      </div>

      <Reveal className="mt-10 divide-y divide-border-subtle rounded-3xl border border-border-subtle bg-surface shadow-[0_20px_40px_-20px_rgba(15,26,46,0.15)]">
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
      </Reveal>
    </section>
  )
}
