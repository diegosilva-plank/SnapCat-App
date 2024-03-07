import { useTheme } from 'contexts/ThemeContext'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import React from 'react'

export const TitleBar = () => {
	const theme = useTheme()

	return (
		<View style={styles.container}>
			<Image
				source={theme.titleLogo as ImageSourcePropType}
				style={{ width: 200, height: 60 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		top: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		width: '100%',
		shadowColor: 'black',
		height: 90,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.2,
	},
})
