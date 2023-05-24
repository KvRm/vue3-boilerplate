interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_APP_EXAMPLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
