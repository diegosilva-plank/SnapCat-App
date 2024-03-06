import { Image, StyleSheet, Text, View } from 'react-native'
import { useTranslation } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import { Theme } from '../../contexts/ThemeContext/types'
import React from 'react'
import { Button } from '../../components/Button'

export const EnterScreen = () => {
	const theme = useTheme()
	const style = stylesHandler(theme)
	const { translation } = useTranslation()

	return (
		<View style={style.wrapper}>
			<Image source={theme.enterLogo} />
			<Text>{translation.enter}</Text>
			<Button
				text="Enter"
				backgroundColor={theme.white}
				color={theme.primary}
				isBold
				hasShadow
				onClick={() => {}}
			/>
		</View>
	)
}

const stylesHandler = (theme: Theme) =>
	StyleSheet.create({
		wrapper: {
			backgroundColor: theme.primary,
			height: '100%',
		},
	})
