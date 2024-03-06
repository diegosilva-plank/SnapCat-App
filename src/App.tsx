import { registerRootComponent } from 'expo'
import React from 'react'
import { LanguageContextProvider } from 'contexts/LanguageContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EnterScreen } from 'screens/EnterScreen'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { useCustomFonts } from 'hooks/useCustomFonts'
import { Feed } from 'screens/Feed'
import { themes } from './themes'

export type RootStackParamList = {
	Enter: undefined
	Feed: undefined
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
						<Stack.Screen name="Feed" component={Feed} />
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeContextProvider>
		</LanguageContextProvider>
	)
}

export default registerRootComponent(App)
