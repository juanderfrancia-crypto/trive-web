const ITEMS = [
  {
    title: 'Conductores verificados',
    body: 'Antes de habilitar a un conductor para publicar, revisamos su licencia de conducción y los documentos del vehículo: SOAT y tecnomecánica vigentes.',
    icon: <path d="M9 12 11 14 15.5 9.5M12 3 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Z" />,
  },
  {
    title: 'Calificación en cada viaje',
    body: 'Conductores y pasajeros se califican mutuamente al terminar el trayecto, así que el historial de cada perfil es real.',
    icon: (
      <path d="m12 3 2.6 5.9 6.4.6-4.8 4.2 1.5 6.3L12 16.9 6.3 20l1.5-6.3-4.8-4.2 6.4-.6L12 3Z" />
    ),
  },
  {
    title: 'Chat dentro de la app',
    body: 'Coordinen el punto de encuentro y los detalles del viaje sin tener que compartir su número de celular.',
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />,
  },
]

export function Trust() {
  return (
    <section id="confianza" className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Confianza entre personas reales</h2>
          <p className="mt-3 text-text-secondary">
            Trive no presta el servicio de transporte — son los conductores quienes lo hacen. Esto es lo que revisamos antes de que alguien pueda publicar una ruta.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-3xl bg-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trive-tint text-trive-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
