import { Translation } from 'translations/types'

export const en: Translation = {
  buttons: {
    enter: 'enter',
    add: 'Add',
    cancel: 'Cancel',
  },
  imageSelection: {
    camera: 'Take a photo',
    gallery: 'Choose from gallery',
  },
  newPostScreen: {
    title: 'New post',
    selectImage: 'Select an image',
    petSelector: 'What pet is in this picture?',
    placeholder: 'Enter your caption',
    errorMessage: 'Please select an image',
    positng: 'Uploading your post...\nPlease wait',
    nameInput: 'Cat name',
    nicknameInput: 'Username',
  },
  newPetScreen: {
    title: 'New cat',
    addProfilePicture: 'Add profile picture',
    errorMessage: 'Please select an image and fill in all fields',
    nicknameInUse: 'Username already in use',
    positng: 'Creating your cat...\nPlease wait',
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
  notifications: {
    newPost: {
      title: 'New post',
      body: (petNickname: string) =>
        `@${petNickname} just posted something new! Check it out!`,
    },
  },
}
