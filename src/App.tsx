import { registerRootComponent } from 'expo'
import React from 'react'
import { themes } from './themes'
import { LanguageContextProvider } from './contexts/LanguageContext'

// Naviagation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EnterScreen } from './screens/EnterScreen'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { useCustomFonts } from './hooks/useCustomFonts'

export type RootStackParamList = {
	Enter: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	const [fontsLoaded] = useCustomFonts()
	if (!fontsLoaded) {
		return null
	}

	return (
		<LanguageContextProvider>
			<ThemeContextProvider theme={themes.snapcat}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Enter">
						<Stack.Screen name="Enter" component={EnterScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeContextProvider>
		</LanguageContextProvider>
	)
}

export default registerRootComponent(App)
