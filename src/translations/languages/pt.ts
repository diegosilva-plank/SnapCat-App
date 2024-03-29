import { Translation } from 'translations/types'

export const pt: Translation = {
  buttons: {
    enter: 'entrar',
    add: 'Adicionar',
    cancel: 'Cancelar',
  },
  imageSelection: {
    camera: 'Tirar uma foto',
    gallery: 'Escolher da galeria',
  },
  newPostScreen: {
    title: 'Nova publicação',
    selectImage: 'Selecione uma imagem',
    petSelector: 'Qual é o bichinho da foto?',
    placeholder: 'Escreva sua legenda aqui',
    errorMessage: 'Por favor, selecione uma imagem',
    positng: 'Publicando sua postagem...\nPor favor, aguarde',
    nameInput: 'Nome',
    nicknameInput: 'Nome de usuário',
  },
  newPetScreen: {
    title: 'Novo gatinho',
    addProfilePicture: 'Adicionar foto de perfil',
    errorMessage: 'Por favor, selecione uma imagem e preencha todos os campos',
    nicknameInUse: 'Nome de usuário já em uso',
    positng: 'Criando seu gatinho...\nPor favor, aguarde',
  },
  timePast: {
    now: 'Agora mesmo',
    minutes: (num: number) => `Há ${num} minuto${num !== 1 ? 's' : ''}`,
    hours: (num: number) => `Há ${num} hora${num !== 1 ? 's' : ''}`,
    days: (num: number) => `Há ${num} dia${num !== 1 ? 's' : ''}`,
    weeks: (num: number) => `Há ${num} semana${num !== 1 ? 's' : ''}`,
    months: (num: number) => `Há ${num} mese${num !== 1 ? 's' : ''}`,
    years: (num: number) => `Há ${num} ano${num !== 1 ? 's' : ''}`,
  },
  notifications: {
    newPost: {
      title: 'Nova publicação',
      body: (petNickname: string) =>
        `@${petNickname} acabou de postar algo novo! Confira!`,
    },
  },
}
