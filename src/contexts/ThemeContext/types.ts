import { PropsWithChildren } from 'react'

export type Theme = {
  primary: string
  secondary: string
  terciary: string
  black: string
  white: string
  gray: string
  skeleton: {
    primary: string
    secondary: string
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
  }
}

export type ThemeContextProviderProps = PropsWithChildren<{
  theme: Theme
}>
