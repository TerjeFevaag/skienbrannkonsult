const BASE_URL = 'https://www.skienbrannkonsult.no'

export function socialMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image: string
}) {
  return {
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'Brannkonsult AS',
      locale: 'nb_NO',
      type: 'website' as const,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [image],
    },
  }
}
