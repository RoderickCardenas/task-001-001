export interface Hits {
  ip: string
  services: object[]
}

export interface SearchResponseData {
  result: {
    duration: number
    hits: Hits[]
    links: {
      next: string
      prev: string
    }
    total: number
  }
}
