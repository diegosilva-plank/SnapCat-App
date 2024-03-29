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
    nameInput: string
    nicknameInput: string
  }
  newPetScreen: {
    title: string
    addProfilePicture: string
    errorMessage: string
    nicknameInUse: string
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
  notifications: {
    newPost: {
      title: string
      body: (petNickname: string) => string
    }
  }
}

export enum Language {
  en = 'en',
  pt = 'pt',
}
