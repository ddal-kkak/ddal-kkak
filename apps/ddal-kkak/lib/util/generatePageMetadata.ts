interface FetchedMetaTag {
  id: number
  createdAt: string
  updatedAt: string
  property: string
  content: string
}

interface OpenGraphImage {
  url: string
  width?: number
  height?: number
  alt?: string
}

interface OpenGraph {
  title: string
  description: string
  type: string
  images: OpenGraphImage[]
}

interface Metadata {
  title: string
  description: string
  openGraph: OpenGraph
}

export const generatePageMetadata = (metaTagList: FetchedMetaTag[]): Metadata => {
  const openGraph: OpenGraph = {
    title: '',
    description: '',
    type: 'website',
    images: [],
  }

  metaTagList.forEach((tag) => {
    switch (tag.property) {
      case 'og:title':
        openGraph.title = tag.content
        break
      case 'og:description':
        openGraph.description = tag.content
        break
      case 'og:image':
        openGraph.images.push({
          url: tag.content,
          width: 800,
          height: 600,
          alt: openGraph.title,
        })
        break
      default:
        break
    }
  })

  return {
    title: openGraph.title,
    description: openGraph.description,
    openGraph,
  }
}
