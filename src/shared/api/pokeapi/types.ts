export interface PokeapiEntitiesResponse {
  count: number
  next: string
  previous: any
  results: PokeapiEntity[]
}

export interface PokeapiEntity {
  name: string
  url: string
}
