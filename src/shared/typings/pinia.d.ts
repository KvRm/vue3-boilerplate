export {}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $router: Router
  }
}
