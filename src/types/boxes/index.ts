export type Box = {
  name: string
  description: string
  website: string | null
  address: string
  mainImage: string
  images: string[]
  tags: string[]
  lat: number
  lng: number
  dropInFee: number
}

export type Review = {
  comment: string
  author?: string
  rating?: number
}
