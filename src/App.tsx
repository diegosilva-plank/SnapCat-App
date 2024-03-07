import { registerRootComponent } from 'expo'
import React from 'react'
import { LanguageContextProvider } from 'contexts/LanguageContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EnterScreen } from 'screens/Enter'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { useCustomFonts } from 'hooks/useCustomFonts'
import { Feed } from 'screens/Feed'
import { themes } from './themes'
import { Theme } from 'contexts/ThemeContext/types'
import { SafeAreaView, StyleSheet } from 'react-native'

export type RootStackParamList = {
  Enter: undefined
  Feed: undefined
  NewPost: undefined
  NewPet: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const [fontsLoaded] = useCustomFonts()
  if (!fontsLoaded) {
    return null
  }
  const styles = stylesHandler(themes.snapcat)

  return (
    <LanguageContextProvider>
      <ThemeContextProvider theme={themes.snapcat}>
        <SafeAreaView style={styles.wrapper}>
          <Stack.Navigator
            initialRouteName="Enter"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Enter" component={EnterScreen} />
            <Stack.Screen name="Feed" component={Feed} />
          </Stack.Navigator>
        </SafeAreaView>
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.primary,
      height: '100%',
    },
  })

export default registerRootComponent(App)
