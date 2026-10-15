const ITEMS = [
  {
    title: 'Conductores verificados',
    body: 'Antes de habilitar a un conductor para publicar, revisamos su licencia de conducción y los documentos del vehículo: SOAT y tecnomecánica vigentes.',
    illustration: '/illustrations/certificate.svg',
  },
  {
    title: 'Calificación en cada viaje',
    body: 'Conductores y pasajeros se califican mutuamente al terminar el trayecto, así que el historial de cada perfil es real.',
    illustration: '/illustrations/leave-a-review.svg',
  },
  {
    title: 'Chat dentro de la app',
    body: 'Coordinen el punto de encuentro y los detalles del viaje sin tener que compartir su número de celular.',
    illustration: '/illustrations/chatting.svg',
  },
]

export function Trust() {
  return (
    <section id="confianza" className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-text-primary [text-shadow:0_1px_1px_rgba(15,26,46,0.08)] sm:text-4xl">Confianza entre personas reales</h2>
            <p className="mt-3 max-w-md text-text-secondary">
              Trive no presta el servicio de transporte — son los conductores quienes lo hacen. Esto es lo que revisamos antes de que alguien pueda publicar una ruta.
            </p>
          </div>
          <img src="/illustrations/team-spirit.svg" alt="" className="mx-auto w-full max-w-[280px] sm:max-w-xs" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
        </div>
      </div>
    </section>
  )
}
