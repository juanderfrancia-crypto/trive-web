import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-20 text-center sm:px-8">
      <img src="/illustrations/no-signal.svg" alt="" className="w-full max-w-[240px]" />
      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">No encontramos esta página</h1>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        El enlace puede estar roto o la página ya no existe.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-trive-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-trive-dark"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
