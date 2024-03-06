import { PropsWithChildren } from 'react'

export type Theme = {
	primary: string
	secondary: string
	terciary: string
	black: string
	white: string
	gray: string
	enterLogo: unknown
	titleLogo: unknown
}

export type ThemeContextProviderProps = PropsWithChildren<{
	theme: Theme
}>
