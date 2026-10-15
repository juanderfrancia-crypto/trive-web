import { Reveal } from '../Reveal'

const SCREENS = [
  { src: '/app-screens/s3_home_anon.jpg', caption: 'Busca tu ruta', offset: 'sm:translate-y-4' },
  { src: '/app-screens/s2_publicado_anon.jpg', caption: 'Publica en segundos', offset: 'sm:-translate-y-6' },
  { src: '/app-screens/s1_reserva_anon.jpg', caption: 'Reserva al instante', offset: 'sm:translate-y-2' },
]

export function AppPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-primary [text-shadow:0_1px_1px_rgba(15,26,46,0.08)] sm:text-4xl">
          Tu viaje, en la palma de la mano
        </h2>
        <p className="mt-3 text-text-secondary">Busca, reserva y confirma sin complicaciones.</p>
      </div>

      <Reveal className="mt-14 grid gap-10 sm:grid-cols-3">
        {SCREENS.map((screen) => (
          <div key={screen.src} className={`flex flex-col items-center ${screen.offset} transition-transform duration-300 hover:-translate-y-2`}>
            <div className="w-full max-w-[220px] overflow-hidden rounded-[1.4rem] border-[6px] border-text-primary bg-text-primary shadow-[0_40px_60px_-20px_rgba(15,26,46,0.5)]">
              <img src={screen.src} alt={screen.caption} className="block w-full" />
            </div>
            <div
              aria-hidden="true"
              className="mt-2 h-4 w-28 rounded-full bg-text-primary/15 blur-md"
            />
            <p className="mt-3 text-sm font-bold text-text-primary">{screen.caption}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
