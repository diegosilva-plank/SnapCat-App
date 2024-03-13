export type Translation = {
  enter: string
  timePast: {
    now: string
    minutes: (num: number) => string
    hours: (num: number) => string
    days: (num: number) => string
    weeks: (num: number) => string
    months: (num: number) => string
    years: (num: number) => string
  }
}

export enum Language {
  en = 'en',
  pt = 'pt',
}
