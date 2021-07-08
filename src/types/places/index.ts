export type Place = {
  name: string
  description: string
  url: string | null
  address: string
  subaddress: string | null
  mainImage: string
  images: string[]
  tags: string[]
  lat: number
  lng: number
}

export type Review = {
  content: string
  author?: string
  rating?: number
}
