import { PropsWithChildren } from 'react'

export type Theme = {
  colors: {
    primary: string
    secondary: string
    terciary: string
    black: string
    white: string
    gray: string
    error: string
    skeleton: {
      primary: string
      secondary: string
    }
    background: string
    text: string
    titlebar: string
  }
  logos: {
    enter: unknown
    title: unknown
  }
  icons: {
    home: unknown
    addPost: unknown
    addPet: unknown
    backArrow: unknown
    uploadCat: unknown
  }
}

export type ThemeContextProviderProps = PropsWithChildren<{
  theme: Theme
}>
