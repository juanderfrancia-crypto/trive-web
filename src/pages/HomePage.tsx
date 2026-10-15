import { Seo } from '../components/Seo'
import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Trust } from '../components/sections/Trust'
import { Coverage } from '../components/sections/Coverage'
import { Faq } from '../components/sections/Faq'
import { SupportBanner } from '../components/sections/SupportBanner'
import { DownloadCta } from '../components/sections/DownloadCta'

export function HomePage() {
  return (
    <>
      <Seo
        title="Trive — Publica tu ruta, reserva tu cupo"
        description="Trive conecta conductores y pasajeros verificados en Puerto Tejada y Cali. Publica tu ruta o reserva tu cupo, con precio fijo y confirmación al instante."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <Trust />
      <Coverage />
      <Faq />
      <SupportBanner />
      <DownloadCta />
    </>
  )
}
