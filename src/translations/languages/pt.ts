import { Translation } from 'translations/types'

export const pt: Translation = {
  enter: 'entrar',
  imageSelection: {
    camera: 'Tirar uma foto',
    gallery: 'Escolher da galeria',
  },
  newPostScreen: {
    title: 'Nova publicação',
    selectImage: 'Selecione uma imagem',
    petSelector: 'Qual é o bichinho da foto?',
    placeholder: 'Escreva sua legenda aqui',
  },
  timePast: {
    now: 'Agora mesmo',
    minutes: (num: number) => `Há ${num} minut${num !== 1 ? 's' : ''}`,
    hours: (num: number) => `Há ${num} hora${num !== 1 ? 's' : ''}`,
    days: (num: number) => `Há ${num} dia${num !== 1 ? 's' : ''}`,
    weeks: (num: number) => `Há ${num} semana${num !== 1 ? 's' : ''}`,
    months: (num: number) => `Há ${num} mese${num !== 1 ? 's' : ''}`,
    years: (num: number) => `Há ${num} ano${num !== 1 ? 's' : ''}`,
  },
}
