export type Translation = {
  buttons: {
    enter: string
    add: string
    cancel: string
  }
  imageSelection: {
    camera: string
    gallery: string
  }
  newPostScreen: {
    title: string
    selectImage: string
    petSelector: string
    placeholder: string
    errorMessage: string
    positng: string
  }
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
