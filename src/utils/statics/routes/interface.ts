export type ApiType = Record<string, string>

export interface IWebRoute {
  path: string
  element: JSX.Element
}

export type WebRoutesType = IWebRoute[]
