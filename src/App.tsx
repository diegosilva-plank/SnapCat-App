import { registerRootComponent } from 'expo'
import { StyleSheet, Text } from 'react-native'
import React from 'react'
import ThemeContent, { useTheme } from './contexts/ThemeContext'
import { themes } from './themes'
import { Theme } from './contexts/ThemeContext/types'

const App = () => {
	return (
		<ThemeContent theme={themes.snapcat}>
			<Child />
		</ThemeContent>
	)
}

function Child(): JSX.Element {
	const theme = useTheme()
	const style = stylesHandler(theme)
	return <Text style={style.wrapper}>Test</Text>
}

const stylesHandler = (theme: Theme) =>
	StyleSheet.create({
		wrapper: {
			backgroundColor: theme.primary,
			height: '100%',
		},
	})

export default registerRootComponent(App)
