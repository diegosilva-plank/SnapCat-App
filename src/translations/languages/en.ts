import { Translation } from 'translations/types'

export const en: Translation = {
  enter: 'enter',
  imageSelection: {
    camera: 'Take a photo',
    gallery: 'Choose from gallery',
  },
  newPostScreen: {
    title: 'New post',
    selectImage: 'Select an image',
    petSelector: 'What pet is in this picture?',
    placeholder: 'Enter your caption',
  },
  timePast: {
    now: 'Just now',
    minutes: (num: number) => `${num} minute${num !== 1 ? 's' : ''} ago`,
    hours: (num: number) => `${num} hour${num !== 1 ? 's' : ''} ago`,
    days: (num: number) => `${num} day${num !== 1 ? 's' : ''} ago`,
    weeks: (num: number) => `${num} week${num !== 1 ? 's' : ''} ago`,
    months: (num: number) => `${num} month${num !== 1 ? 's' : ''} ago`,
    years: (num: number) => `${num} year${num !== 1 ? 's' : ''} ago`,
  },
}
