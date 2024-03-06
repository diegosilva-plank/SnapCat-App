import { registerRootComponent } from 'expo'
import React from 'react'
import ThemeContextProvider from './contexts/ThemeContext'
import { themes } from './themes'
import { LanguageContextProvider } from './contexts/LanguageContext'

// Naviagation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EnterScreen } from './screens/EnterScreen'

export type RootStackParamList = {
	Enter: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
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
