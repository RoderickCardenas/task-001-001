interface Result {
  ip: string
  services: object[]
}

export interface SearchResponseData {
  result: {
    hits: Result[]
    links: {
      next: string
      prev: string
    }
  }
}
