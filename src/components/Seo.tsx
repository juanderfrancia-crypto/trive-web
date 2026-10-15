import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

const SITE_URL = 'https://trivesoft.com'

export function Seo({ title, description, path, noindex }: SeoProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
