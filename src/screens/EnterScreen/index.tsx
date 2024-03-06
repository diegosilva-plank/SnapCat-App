import { Image, StyleSheet, View } from 'react-native'
import { useTranslation } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import { Theme } from '../../contexts/ThemeContext/types'
import React from 'react'
import { Button } from '../../components/Button'
import { EnterScreenProps } from './types'

export const EnterScreen = ({ navigation }: EnterScreenProps) => {
	const theme = useTheme()
	const style = stylesHandler(theme)
	const { translation } = useTranslation()

	return (
		<View style={style.wrapper}>
			<Image source={theme.enterLogo} />
			<View style={style.button}>
				<Button
					text={translation.enter}
					backgroundColor={theme.white}
					color={theme.primary}
					isBold
					hasShadow
					onClick={() => {
						navigation.navigate('Feed')
					}}
				/>
			</View>
		</View>
	)
}

const stylesHandler = (theme: Theme) =>
	StyleSheet.create({
		wrapper: {
			backgroundColor: theme.primary,
			height: '100%',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		button: {
			width: 250,
			marginBottom: 100,
		},
	})
