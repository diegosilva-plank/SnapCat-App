import { registerRootComponent } from 'expo'
import { StyleSheet, Text } from 'react-native'
import React from 'react'
import ThemeContextProvider, { useTheme } from './contexts/ThemeContext'
import { themes } from './themes'
import { Theme } from './contexts/ThemeContext/types'
import {
	LanguageContextProvider,
	useTranslation,
} from './contexts/LanguageContext'

const App = () => {
	return (
		<LanguageContextProvider>
			<ThemeContextProvider theme={themes.snapcat}>
				<Child />
			</ThemeContextProvider>
		</LanguageContextProvider>
	)
}

function Child(): JSX.Element {
	const theme = useTheme()
	const style = stylesHandler(theme)
	const { translation } = useTranslation()
	return <Text style={style.wrapper}>{translation.enter}</Text>
}

const stylesHandler = (theme: Theme) =>
	StyleSheet.create({
		wrapper: {
			backgroundColor: theme.primary,
			height: '100%',
		},
	})

export default registerRootComponent(App)
