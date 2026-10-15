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
