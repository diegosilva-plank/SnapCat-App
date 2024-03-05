import React, { createContext } from 'react'
import { Theme, ThemeContentProps } from './types'
import { themes } from '../../themes'

const ThemeContext = createContext<Theme>(themes.snapcat)

export default function ThemeContent(props: ThemeContentProps) {
	return (
		<ThemeContext.Provider value={props.theme}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => React.useContext(ThemeContext)
