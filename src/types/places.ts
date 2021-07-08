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
