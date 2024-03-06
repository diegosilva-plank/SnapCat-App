import { PropsWithChildren } from 'react'

export type Theme = {
	primary: string
	secondary: string
	terciary: string
	black: string
	white: string
	gray: string
	enterLogoUrl: string
	titleLogoUrl: string
}

export type ThemeContextProviderProps = PropsWithChildren<{
	theme: Theme
}>
